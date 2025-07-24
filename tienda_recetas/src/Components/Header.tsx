import { InputGroup, InputLeftElement, Input, Container, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { CiSearch } from "react-icons/ci"
import type { SearchForm } from "../types";


type Props = {
  onSubmit: (data : SearchForm) => void;
}

function Header({ onSubmit }: Props) {
  const {register, formState, handleSubmit} = useForm<SearchForm>()
  return (
   <Container mt="1" maxW='3xl'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <CiSearch />
        </InputLeftElement>
        <Input mr="2"
        focusBorderColor={!!formState.errors.search ? "crimson" : "blue.400"}
        isInvalid={!!formState.errors.search} 
        {...register('search', {required: true})}type='text' 
        placeholder="Intenta con 'chicke' o 'beans' " />
        <Button color="white" type="submit" bgColor="blue.400" > Buscar</Button>
      </InputGroup>
    </form>
  </Container>

  )
}

export default Header