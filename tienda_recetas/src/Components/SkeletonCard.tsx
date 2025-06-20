import { Card, CardBody,  SkeletonText} from "@chakra-ui/react"

function SkeletonCard() {
  return (
    <Card maxW='sm'>
      <CardBody>
        <SkeletonText mt='1' noOfLines={1} spacing='4' skeletonHeight='180' />
        <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
      </CardBody>
            
    </Card>
  )
}

export default SkeletonCard