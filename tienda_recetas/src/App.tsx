import { Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import SideNav from './Components/SideNav'
import { useState } from 'react';
import type { Category, Meal, MealDetails, SearchForm } from './types';
import useHttpData from './Hooks/useHttpData';
import axios from 'axios';
import RecipiModal from './Components/RecipiModal';
import useFetch from './Hooks/useFetch';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'
const url = `${baseUrl}list.php?c=list`;

const makeMealUrl = (category: Category) => `${baseUrl}/filter.php?c=${category.strCategory}`

const defaultCategory = {
  strCategory: "Beef",
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);

  const {loading, data } = useHttpData<Category>(url);
  const {loading:
      loadingMeal,
      data: dataMeal,
      setData: setMeal,
    setLoading: setLoadingMeal,
   } 
      = useHttpData<Meal>
  (makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    const url = `${baseUrl}/search.php?s=${searchForm.search}`
    axios
    .get<{ meals: Meal[] }>(url)
    .then(({data}) => setMeal(data.meals))
    .finally(() => setLoadingMeal(false))
  }
  const {fetch, loading: loadingMealDetails, data: mealDetalData } = useFetch<MealDetails>();
  
  const searchMealDetails = (meal: Meal) =>{
    onOpen()
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`)

  }
   return (
    <>
      <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={"60px 1fr "}
        gridTemplateColumns={{sm: `0 1fr`, md:`250px 1fr` }}
        fontSize={14}
      >
        <GridItem 
        boxShadow="lg" zIndex="1" pos="sticky"
        top="0px" pt='7px' bg='white' area={'header'}>
          <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem 
        pos="sticky" top="60px" left="0px" p='5' 
        area={'nav'} height="calc(100vh - 60px)"
        overflowY="auto"
        >
         <SideNav 
         categories={data} loading={loading}
        selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
         />
        </GridItem>
        <GridItem p='4' bg='gray.100' area={'main'}>
          <MainContent 
          openRecipe={searchMealDetails}
          loading={loadingMeal} meals={dataMeal}/>
        </GridItem>
      </Grid>
      <RecipiModal
       loading={loadingMealDetails} 
       isOpen={isOpen} onClose={onClose}
       data={mealDetalData}   />
    </>
  )
}

export default App
