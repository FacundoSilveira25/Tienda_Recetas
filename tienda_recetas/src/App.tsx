import { Grid, GridItem } from '@chakra-ui/react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import SideNav from './Components/SideNav'
import { useState } from 'react';
import type { Category, Meal } from './types';
import useHttpData from './Hooks/useHttpData';

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const makeMealUrl = (category: Category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`

const defaultCategory = {
  strCategory: "Beef",
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);
  
  const {loading, data } = useHttpData<Category>(url);
  const {loading: loadingMeal, data: dataMeal } = useHttpData<Meal>
  (makeMealUrl(defaultCategory));
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
          <Header />
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
          <MainContent loading={loadingMeal} meals={dataMeal}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
