import { Button, Modal, ModalContent, ModalFooter,  ModalOverlay} from "@chakra-ui/react"
import RecipieModalSkeleton from "./RecipieModalSkeleton";
import type { MealDetails } from "../types";
import RecipieModalContent from "./RecipieModalContent";

type Props = {
  data: MealDetails | undefined
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}
function RecipiModal({isOpen, onClose, loading, data}: Props) {
      
  return (
    <>
    <Modal blockScrollOnMount={isOpen} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
         {  loading ? <RecipieModalSkeleton/> : data && <RecipieModalContent data={data} />} 
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
            
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

  
}

export default RecipiModal