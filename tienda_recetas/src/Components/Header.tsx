import { InputGroup, InputLeftElement, Input, Container } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci"

function Header() {
  return (
   <Container mt="1" maxW='3xl'>
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <CiSearch />
      </InputLeftElement>
      <Input type='tel' placeholder="Intenta con 'chicke' o 'beans' " />
    </InputGroup>
  </Container>

  )
}

export default Header