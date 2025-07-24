import { Container, SkeletonText } from '@chakra-ui/react'

type Props = {}

function RecipieModalSkeleton({}: Props) {
  return (
    <Container>
        <SkeletonText spacing="4" mt="4" mb="5" noOfLines={1} skeletonHeight={8}/>
        <SkeletonText spacing="4" borderRadius={200} noOfLines={1} skeletonHeight={280}/>
        <SkeletonText noOfLines={5} skeletonHeight={4} />
    </Container>
  )
}

export default RecipieModalSkeleton