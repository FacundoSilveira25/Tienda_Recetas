import { Button,  Card, CardBody,   CardFooter,   Heading,  Image, Text } from "@chakra-ui/react";
import type { Meal } from "../types";

type Props = {
  meal: Meal;
}

function MealCard({meal}: Props) {
  return (
   <Card maxW='sm'>
        <CardBody>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            borderRadius='lg' />
          <Heading size='md' color="blue.400">
            <Text>{meal.strMeal}</Text>
          </Heading>
        </CardBody>
        <CardFooter pt={0}>
          <Button colorScheme='white' bgColor={"blue.400"}>
            Ver Receta
          </Button>
        </CardFooter>
      </Card>
  )
}

export default MealCard