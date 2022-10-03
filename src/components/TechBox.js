import { memo } from 'react';
import {
    Heading,
    Box,
    Text,
    OrderedList,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react';
export const TechBox = ({tech}) => {

    const modify = (str='') => {
        let ind = str.lastIndexOf('/') + 1;
        return str.slice(ind)
    }

    if(true) {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{tech.name}</Heading>
                <Text color='blue.400'><Text color='blue.600' as='b'>Army Type:</Text> {tech.age} </Text>
                {/* <Text color='blue.400'><Text color='blue.600' as='b'>Expansion:</Text> {tech.expansion} </Text> */}
                <Text color='blue.400'><Text color='blue.600' as='b'>Team Bonus:</Text> {tech.build_time} </Text>
                {/* <Text color='blue.400'><Text color='blue.600' as='b'>Team Bonus:</Text> {tech.description} </Text> */}
                <UnorderedList>
                    { tech?.cost?.Wood ? <Text color='blue.400'><Text color='blue.600' as='b'>Wood:</Text> {tech.cost.Wood}</Text>: '' }
                    { tech?.cost?.Food ? <Text color='blue.400'><Text color='blue.600' as='b'>Food:</Text> {tech.cost.Food}</Text>: '' }
                    { tech?.cost?.Gold ? <Text color='blue.400'><Text color='blue.600' as='b'>Gold:</Text> {tech.cost.Gold}</Text>: '' }
                    { tech?.cost?.Stone ? <Text color='blue.400'><Text color='blue.600' as='b'>Stone:</Text> {tech.cost.Stone}</Text>: '' }
              </UnorderedList>
                {tech?.applies_to ? <Text color='blue.400'><Text color='blue.600' as='b'>Applies to:</Text> {modify(tech.applies_to[0])}</Text> : ''}
                {tech?.develops_in ? <Text color='blue.400'><Text color='blue.600' as='b'>develops in:</Text> {modify(tech.develops_in)}</Text> : ''}
                <Box mt='2'> <Text bg="blue.200" color='blue.600'>Description</Text>
                <UnorderedList>
                    <ListItem>{tech.description}</ListItem>
                </UnorderedList>
                </Box>
            </Box>  
        )
        
    }

 

}

// export default memo(TechBox);