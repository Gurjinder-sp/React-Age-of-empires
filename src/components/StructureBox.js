import {
    Heading,
    Box,
    Text,
    Flex,
    OrderedList,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react';
  import { useEffect, memo } from 'react';


  export const CivilStruct =  ({struct}) => {

    return (
        <>
        <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
        <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{struct.name}</Heading>
        <Text color='blue.400'><Text color='blue.600' as='b'>Civilzation Age:</Text> {struct.age} </Text>
        <Text color='blue.400'><Text color='blue.600' as='b'>Build Time:</Text> {struct.build_time} </Text>
        <Text color='blue.400'><Text color='blue.600' as='b'>Hit Points:</Text> {struct.hit_points} </Text>
        <Text color='blue.400'><Text color='blue.600' as='b'>Line of Sight:</Text> {struct.line_of_sight} </Text>
        <Box>
        <Text bg="blue.200" color='blue.600'>Cost</Text>
        </Box>
        <UnorderedList>
        { struct?.cost?.Wood ? <Text color='blue.400'><Text color='blue.600' as='b'>Wood:</Text> {struct.cost.Wood}</Text>: '' }
        { struct?.cost?.Food ? <Text color='blue.400'><Text color='blue.600' as='b'>Food:</Text> {struct.cost.Food}</Text>: '' }
        { struct?.cost?.Gold ? <Text color='blue.400'><Text color='blue.600' as='b'>Gold:</Text> {struct.cost.Gold}</Text>: '' }
        { struct?.cost?.Stone ? <Text color='blue.400'><Text color='blue.600' as='b'>Stone:</Text> {struct.cost.Stone}</Text>: '' }
        </UnorderedList>
        {struct?.special ? <Box mt='2'> <Text bg="blue.200" color='blue.600'>Special</Text>
            <OrderedList p='2'>
             {struct.special.map((bon) => {
            return <ListItem color='blue.400' key={bon}>{bon}</ListItem>
            })}
            </OrderedList>
            </Box> : ''
        }
          </Box>  
       </>
    )
  }

//   export default memo(CivilStruct);