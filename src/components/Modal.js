import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Spinner,
    Box, 
    Heading, Text, Flex
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import API from '../axios';
import { API_DATA_TYPE } from './util.type';

  function BasicModal({isOpenT, isCloseT, data}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loader, setLoader] = useState(true);
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        console.log(isOpenT);
        setLoader(true);
        let urlIs = '';
        if(isOpenT) {
          onOpen();
            let index = data.url.lastIndexOf('/');
            urlIs=`/${data.type}/${data.url.slice(index +1)}`
          callApi(urlIs)

          // console.log(data);

        
        }
    },[isOpenT,data])


    const callApi = (url) => {
      API({
        method: 'get',
        url:url,
      }).then(res => {
        // setCivilizations(res.data.civilizations);
        // setAllCivilizations(res.data.civilizations);
        // loaded(true);
        setApiData(res.data);
      setLoader(false);

      // console.log(res)
    })
    }


    // useEffect(() => {
    //   console.log(data);
    // }, [data])

    // useEffect(() => {
    //     isCloseT();
    //     console.log(isOpen)
    // },[isOpen]);

    const modify = (str='') => {
      let ind = str.lastIndexOf('/') + 1;
      return str.slice(ind)
  }

    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent height='30vh'>
            <ModalHeader textTransform='capitalize' bg='gray.800' color='white'>{data.type} Details</ModalHeader>
            <ModalCloseButton color='white' />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              {loader ? 
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='black.500'
                size='xl'
              /> : <>
               {apiData?.name ? <Heading as='h3' color='gray.800'>{apiData.name}</Heading>: '' }
               <Flex>
               {apiData?.hit_points ? <Text flex='50%'><Text as='b'>Hit Points:</Text> {apiData.hit_points}</Text>: '' }
               {apiData?.attack ? <Text flex='50%'><Text as='b'>Attack:</Text> {apiData.attack}</Text>: '' }
               </Flex>
              <Flex>
               {apiData?.cost?.Food ? <Text flex='50%'><Text as='b'>Food:</Text> {apiData.cost.Food}</Text>: '' } 
               {apiData?.cost?.Wood ? <Text flex='50%'><Text as='b'>Wood:</Text> {apiData.cost.Wood}</Text>: '' }
               
               {apiData?.cost?.Gold ? <Text flex='50%'><Text as='b'>Gold:</Text> {apiData.cost.Gold}</Text>: '' } 
               {apiData?.cost?.Stone ? <Text flex='50%'><Text as='b'>Stone:</Text> {apiData.cost.Stone}</Text>: '' }
               </Flex>
               {apiData?.created_in ? <Text textTransform='capitalize'> <Text as='b'>Created In:</Text> {modify(apiData.created_in)}</Text>: '' }
               {apiData?.develops_in ? <Text textTransform='capitalize'> <Text as='b'>Created In:</Text> {modify(apiData.develops_in)}</Text>: '' }
               {apiData?.description ? <Text> <Text as='b'>Description:</Text> {apiData.description}</Text>: '' }
               </> }
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicModal;