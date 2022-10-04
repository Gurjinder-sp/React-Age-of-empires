import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    UnorderedList,
    ListItem,
  } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef, useEffect } from 'react';
import { Link} from 'react-router-dom';


function DrawerComp({open, close}) {
const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = useRef();
useEffect(() => {
    if(open) {
        onOpen();
    };
},[open])

    return (
        <>
         <HamburgerIcon position='absolute' top='2%' left="1%" ref={btnRef} color='white' onClick={onOpen} />
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent bg='black' color='white'>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
                <UnorderedList>
                    <ListItem my='2' fontSize='2rem' borderBottom='1px'><Link to='/'>Civilizations</Link></ListItem>
                    <ListItem my='2' fontSize='2rem' borderBottom='1px'><Link to="/units">Units</Link></ListItem>
                    <ListItem my='2' fontSize='2rem' borderBottom='1px'><Link to='/structures'>Structures</Link></ListItem>
                    <ListItem my='2' fontSize='2rem' borderBottom='1px'><Link to='/techs'>Technologies</Link></ListItem>
                </UnorderedList> 
            </DrawerBody>

            <DrawerFooter>
                {/* <Button variant='outline' mr={3} onClick={() => close()}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default DrawerComp;
