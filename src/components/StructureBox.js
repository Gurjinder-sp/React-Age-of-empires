import {
    Heading,
    Box,
    Text,
    Flex,
    OrderedList,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react';

  export const CivilStruct =  ({struct}) => {

    if(struct.age === 'Dark') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{struct.name}</Heading>
            <Flex>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Civilization Age:</Text> {struct.age} </Text>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Build Time:</Text> {struct.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Hit Points:</Text> {struct.hit_points} </Text>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Line of Sight:</Text> {struct.line_of_sight} </Text>
            </Flex>
            <Box>
            <Text bg="blue.200" color='blue.600'>Cost</Text>
            </Box>
            <UnorderedList>
            <Flex>
            { struct?.cost?.Wood ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Wood:</Text> {struct.cost.Wood}</Text>: '' }
            { struct?.cost?.Food ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Food:</Text> {struct.cost.Food}</Text>: '' }
            { struct?.cost?.Gold ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Gold:</Text> {struct.cost.Gold}</Text>: '' }
            { struct?.cost?.Stone ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Stone:</Text> {struct.cost.Stone}</Text>: '' }
            </Flex>
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
        )
    }

    if(struct.age === 'Feudal') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='cyan.800' bg='cyan.400' py='2'>{struct.name}</Heading>
            <Flex>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Civilization Age:</Text> {struct.age} </Text>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Build Time:</Text> {struct.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Hit Points:</Text> {struct.hit_points} </Text>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Line of Sight:</Text> {struct.line_of_sight} </Text>
            </Flex>
            <Box>
            <Text bg="cyan.200" color='cyan.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
            { struct?.cost?.Wood ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Wood:</Text> {struct.cost.Wood}</Text>: '' }
            { struct?.cost?.Food ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Food:</Text> {struct.cost.Food}</Text>: '' }
            { struct?.cost?.Gold ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Gold:</Text> {struct.cost.Gold}</Text>: '' }
            { struct?.cost?.Stone ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Stone:</Text> {struct.cost.Stone}</Text>: '' }
                </Flex>
            </UnorderedList>
            {struct?.special ? <Box mt='2'> <Text bg="cyan.200" color='cyan.600'>Special</Text>
                <OrderedList p='2'>
                 {struct.special.map((bon) => {
                return <ListItem color='cyan.400' key={bon}>{bon}</ListItem>
                })}
                </OrderedList>
                </Box> : ''
            }
              </Box>  
        )
    }

    if(struct.age === 'Imperial') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='teal.800' bg='teal.400' py='2'>{struct.name}</Heading>
            <Flex>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Civilization Age:</Text> {struct.age} </Text>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Build Time:</Text> {struct.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Hit Points:</Text> {struct.hit_points} </Text>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Line of Sight:</Text> {struct.line_of_sight} </Text>
            </Flex>
            <Box>
            <Text bg="teal.200" color='teal.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
            { struct?.cost?.Wood ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Wood:</Text> {struct.cost.Wood}</Text>: '' }
            { struct?.cost?.Food ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Food:</Text> {struct.cost.Food}</Text>: '' }
            { struct?.cost?.Gold ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Gold:</Text> {struct.cost.Gold}</Text>: '' }
            { struct?.cost?.Stone ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Stone:</Text> {struct.cost.Stone}</Text>: '' }
            </Flex>
            </UnorderedList>
            {struct?.special ? <Box mt='2'> <Text bg="teal.200" color='teal.600'>Special</Text>
                <OrderedList p='2'>
                 {struct.special.map((bon) => {
                return <ListItem color='teal.400' key={bon}>{bon}</ListItem>
                })}
                </OrderedList>
                </Box> : ''
            }
              </Box>  
        )
    }
    if(struct.age === 'Castle') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='pink.800' bg='pink.400' py='2'>{struct.name}</Heading>
            <Flex>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Civilization Age:</Text> {struct.age} </Text>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Build Time:</Text> {struct.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Hit Points:</Text> {struct.hit_points} </Text>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Line of Sight:</Text> {struct.line_of_sight} </Text>
            </Flex>
            <Box>
            <Text bg="pink.200" color='pink.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
            { struct?.cost?.Wood ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Wood:</Text> {struct.cost.Wood}</Text>: '' }
            { struct?.cost?.Food ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Food:</Text> {struct.cost.Food}</Text>: '' }
            { struct?.cost?.Gold ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Gold:</Text> {struct.cost.Gold}</Text>: '' }
            { struct?.cost?.Stone ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Stone:</Text> {struct.cost.Stone}</Text>: '' }
            </Flex>
            </UnorderedList>
            {struct?.special ? <Box mt='2'> <Text bg="pink.200" color='pink.600'>Special</Text>
                <OrderedList p='2'>
                 {struct.special.map((bon) => {
                return <ListItem color='pink.400' key={bon}>{bon}</ListItem>
                })}
                </OrderedList>
                </Box> : ''
            }
              </Box>  
        )
    }
    
  }

//   export default memo(CivilStruct);