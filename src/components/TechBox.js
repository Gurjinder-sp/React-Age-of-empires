import {
    Heading,
    Box,
    Text,
    OrderedList,
    ListItem,
    UnorderedList,Flex
  } from '@chakra-ui/react';
export const TechBox = ({tech}) => {

    const modify = (str='') => {
        let ind = str.lastIndexOf('/') + 1;
        return str.slice(ind)
    }

    if(tech.age === 'Dark') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{tech.name}</Heading>
                <Flex>
                <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Age:</Text> {tech.age} </Text>
                <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Build Time:</Text> {tech.build_time} </Text>
                </Flex>
                <Flex>
                {tech?.applies_to ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Applies to:</Text> {modify(tech.applies_to[0])}</Text> : ''}
                {tech?.develops_in ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>develops in:</Text> {modify(tech.develops_in)}</Text> : ''}
                </Flex>
                <Box>
                    <Text  bg="blue.200" color='blue.600'>Cost</Text>
                </Box>
                <UnorderedList>
                    <Flex>
                    { tech?.cost?.Wood ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Wood:</Text> {tech.cost.Wood}</Text>: '' }
                    { tech?.cost?.Food ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Food:</Text> {tech.cost.Food}</Text>: '' }
                    { tech?.cost?.Gold ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Gold:</Text> {tech.cost.Gold}</Text>: '' }
                    { tech?.cost?.Stone ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Stone:</Text> {tech.cost.Stone}</Text>: '' }
                    </Flex>
              </UnorderedList>
               
                <Box mt='2'> <Text bg="blue.200" color='blue.600'>Description</Text>
                <UnorderedList>
                    <ListItem color="blue.400">{tech.description}</ListItem>
                </UnorderedList>
                </Box>
            </Box>  
        )
        
    }

    if(tech.age === 'Feudal') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='cyan.800' bg='cyan.400' py='2'>{tech.name}</Heading>
                <Flex>
                <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Age:</Text> {tech.age} </Text>
                <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Build Time:</Text> {tech.build_time} </Text>
                </Flex>
                <Flex>
                {tech?.applies_to ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Applies to:</Text> {modify(tech.applies_to[0])}</Text> : ''}
                {tech?.develops_in ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>develops in:</Text> {modify(tech.develops_in)}</Text> : ''}
                </Flex>
                <Box>
                    <Text  bg="cyan.200" color='cyan.600'>Cost</Text>
                </Box>
                <UnorderedList>
                    <Flex>
                    { tech?.cost?.Wood ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Wood:</Text> {tech.cost.Wood}</Text>: '' }
                    { tech?.cost?.Food ? <Text color='cyan.400' flex='50%' ><Text color='cyan.600' as='b'>Food:</Text> {tech.cost.Food}</Text>: '' }
                    { tech?.cost?.Gold ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Gold:</Text> {tech.cost.Gold}</Text>: '' }
                    { tech?.cost?.Stone ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Stone:</Text> {tech.cost.Stone}</Text>: '' }
                    </Flex>
              </UnorderedList>
            
                <Box mt='2'> <Text bg="cyan.200" color='cyan.600'>Description</Text>
                <UnorderedList>
                    <ListItem color="cyan.400">{tech.description}</ListItem>
                </UnorderedList>
                </Box>
            </Box>  
        )
        
    }

    if(tech.age === 'Castle') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='teal.800' bg='teal.400' py='2'>{tech.name}</Heading>
                <Flex>
                <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Age:</Text> {tech.age} </Text>
                <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Build Time:</Text> {tech.build_time} </Text>
                </Flex>
                <Flex>
                {tech?.applies_to ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Applies to:</Text> {modify(tech.applies_to[0])}</Text> : ''}
                {tech?.develops_in ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>develops in:</Text> {modify(tech.develops_in)}</Text> : ''}
                </Flex>
                <Box>
                    <Text  bg="teal.200" color='teal.600'>Cost</Text>
                </Box>
                <UnorderedList>
                    <Flex>
                    { tech?.cost?.Wood ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Wood:</Text> {tech.cost.Wood}</Text>: '' }
                    { tech?.cost?.Food ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Food:</Text> {tech.cost.Food}</Text>: '' }
                    { tech?.cost?.Gold ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Gold:</Text> {tech.cost.Gold}</Text>: '' }
                    { tech?.cost?.Stone ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Stone:</Text> {tech.cost.Stone}</Text>: '' }
                    </Flex>
              </UnorderedList>
           
                <Box mt='2'> <Text bg="teal.200" color='teal.600'>Description</Text>
                <UnorderedList>
                    <ListItem color="teal.400">{tech.description}</ListItem>
                </UnorderedList>
                </Box>
            </Box>  
        )
        
    }

    if(tech.age === 'Imperial') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='pink.800' bg='pink.400' py='2'>{tech.name}</Heading>
                <Flex>
                <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Age:</Text> {tech.age} </Text>
                <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Build Time:</Text> {tech.build_time} </Text>
                </Flex>
                <Flex>
                {tech?.applies_to ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Applies to:</Text> {modify(tech.applies_to[0])}</Text> : ''}
                {tech?.develops_in ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>develops in:</Text> {modify(tech.develops_in)}</Text> : ''}
                </Flex>
                <Box>
                    <Text  bg="pink.200" color='pink.600'>Cost</Text>
                </Box>
                <UnorderedList>
                    <Flex>
                    { tech?.cost?.Wood ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Wood:</Text> {tech.cost.Wood}</Text>: '' }
                    { tech?.cost?.Food ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Food:</Text> {tech.cost.Food}</Text>: '' }
                    { tech?.cost?.Gold ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Gold:</Text> {tech.cost.Gold}</Text>: '' }
                    { tech?.cost?.Stone ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Stone:</Text> {tech.cost.Stone}</Text>: '' }
                    </Flex>
              </UnorderedList>
            
                <Box mt='2'> <Text bg="pink.200" color='pink.600'>Description</Text>
                <UnorderedList>
                    <ListItem color="pink.400">{tech.description}</ListItem>
                </UnorderedList>
                </Box>
            </Box>  
        )
        
    }

 

}

// export default memo(TechBox);