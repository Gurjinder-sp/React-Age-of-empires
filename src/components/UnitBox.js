import {
    Heading,
    Box,
    Text,
    OrderedList,
    ListItem,
    UnorderedList,
    Flex
  } from '@chakra-ui/react';
function UnitBox({unit}) {

    const modify = (str='') => {
        let ind = str.lastIndexOf('/') + 1;
        return str.slice(ind)
    }

    if(unit.age === 'Dark') {

        return (
         <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{unit.name}</Heading>
            <Flex>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Age:</Text> {unit.age} </Text>
            <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Build Time:</Text> {unit.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='blue.400' flex="50%"><Text color='blue.600' as='b'>Movement Rate:</Text> {unit.movement_rate} </Text>
            <Text color='blue.400' flex="50%"><Text color='blue.600' as='b'>Line of Sight:</Text> {unit.line_of_sight} </Text>
            </Flex>
            <Flex>
            <Text color='blue.400' flex="50%"><Text color='blue.600' as='b'>Hit Points:</Text> {unit.hit_points} </Text>
            <Text color='blue.400' flex="50%"><Text color='blue.600' as='b'>Range:</Text> {unit.range} </Text>
            </Flex>
            <Flex>
            <Text color='blue.400' flex="50%"><Text color='blue.600' as='b'>Attack:</Text> {unit.attack} </Text>
            <Text color='blue.400' flex="50%" ><Text color='blue.600' as='b'>Accuracy:</Text> {unit.accuracy} </Text>
            </Flex>
            {unit?.created_in ? <Text color='blue.400' textTransform='capitalize'><Text color='blue.600' as='b'>Applies to:</Text> {modify(unit.created_in)}</Text> : ''}
            
           
            <Box>
                <Text  bg="blue.200" color='blue.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
                { unit?.cost?.Wood ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Wood:</Text> {unit.cost.Wood}</Text>: '' }
                { unit?.cost?.Food ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Food:</Text> {unit.cost.Food}</Text>: '' }
                { unit?.cost?.Gold ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Gold:</Text> {unit.cost.Gold}</Text>: '' }
                { unit?.cost?.Stone ? <Text color='blue.400' flex='50%'><Text color='blue.600' as='b'>Stone:</Text> {unit.cost.Stone}</Text>: '' }
                </Flex>
             </UnorderedList>
            <Text bg="blue.200" color='blue.600'>Description</Text>
            <UnorderedList>
                <ListItem color="blue.400">{unit.description}</ListItem>
            </UnorderedList>
            <Text bg="blue.200" color='blue.600'>Attack Bonus</Text>
                    <OrderedList p='2'>
                    {unit?.attack_bonus?.map((bon) => {
                    return <ListItem color='blue.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
            </Box>  
        )
    }

    if(unit.age === 'Feudal') {

        return (
         <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='cyan.800' bg='cyan.400' py='2'>{unit.name}</Heading>
            <Flex>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Age:</Text> {unit.age} </Text>
            <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Build Time:</Text> {unit.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='cyan.400' flex="50%"><Text color='cyan.600' as='b'>Movement Rate:</Text> {unit.movement_rate} </Text>
            <Text color='cyan.400' flex="50%"><Text color='cyan.600' as='b'>Line of Sight:</Text> {unit.line_of_sight} </Text>
            </Flex>
            <Flex>
            <Text color='cyan.400' flex="50%"><Text color='cyan.600' as='b'>Hit Points:</Text> {unit.hit_points} </Text>
            <Text color='cyan.400' flex="50%"><Text color='cyan.600' as='b'>Range:</Text> {unit.range} </Text>
            </Flex>
            <Flex>
            <Text color='cyan.400' flex="50%"><Text color='cyan.600' as='b'>Attack:</Text> {unit.attack} </Text>
            <Text color='cyan.400' flex="50%" ><Text color='cyan.600' as='b'>Accuracy:</Text> {unit.accuracy} </Text>
            </Flex>
            {unit?.created_in ? <Text color='cyan.400' textTransform='capitalize'><Text color='cyan.600' as='b'>Applies to:</Text> {modify(unit.created_in)}</Text> : ''}
            
           
            <Box>
                <Text  bg="cyan.200" color='cyan.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
                { unit?.cost?.Wood ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Wood:</Text> {unit.cost.Wood}</Text>: '' }
                { unit?.cost?.Food ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Food:</Text> {unit.cost.Food}</Text>: '' }
                { unit?.cost?.Gold ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Gold:</Text> {unit.cost.Gold}</Text>: '' }
                { unit?.cost?.Stone ? <Text color='cyan.400' flex='50%'><Text color='cyan.600' as='b'>Stone:</Text> {unit.cost.Stone}</Text>: '' }
                </Flex>
             </UnorderedList>
            <Text bg="cyan.200" color='cyan.600'>Description</Text>
            <UnorderedList>
                <ListItem color="cyan.400">{unit.description}</ListItem>
            </UnorderedList>
            <Text bg="cyan.200" color='cyan.600'>Attack Bonus</Text>
                    <OrderedList p='2'>
                    {unit?.attack_bonus?.map((bon) => {
                    return <ListItem color='cyan.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
            </Box>  
        )
    }

    if(unit.age === 'Imperial') {

        return (
         <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='teal.800' bg='teal.400' py='2'>{unit.name}</Heading>
            <Flex>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Age:</Text> {unit.age} </Text>
            <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Build Time:</Text> {unit.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='teal.400' flex="50%"><Text color='teal.600' as='b'>Movement Rate:</Text> {unit.movement_rate} </Text>
            <Text color='teal.400' flex="50%"><Text color='teal.600' as='b'>Line of Sight:</Text> {unit.line_of_sight} </Text>
            </Flex>
            <Flex>
            <Text color='teal.400' flex="50%"><Text color='teal.600' as='b'>Hit Points:</Text> {unit.hit_points} </Text>
            <Text color='teal.400' flex="50%"><Text color='teal.600' as='b'>Range:</Text> {unit.range} </Text>
            </Flex>
            <Flex>
            <Text color='teal.400' flex="50%"><Text color='teal.600' as='b'>Attack:</Text> {unit.attack} </Text>
            <Text color='teal.400' flex="50%" ><Text color='teal.600' as='b'>Accuracy:</Text> {unit.accuracy} </Text>
            </Flex>
            {unit?.created_in ? <Text color='teal.400' textTransform='capitalize'><Text color='teal.600' as='b'>Applies to:</Text> {modify(unit.created_in)}</Text> : ''}
            
           
            <Box>
                <Text  bg="teal.200" color='teal.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
                { unit?.cost?.Wood ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Wood:</Text> {unit.cost.Wood}</Text>: '' }
                { unit?.cost?.Food ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Food:</Text> {unit.cost.Food}</Text>: '' }
                { unit?.cost?.Gold ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Gold:</Text> {unit.cost.Gold}</Text>: '' }
                { unit?.cost?.Stone ? <Text color='teal.400' flex='50%'><Text color='teal.600' as='b'>Stone:</Text> {unit.cost.Stone}</Text>: '' }
                </Flex>
             </UnorderedList>
            <Text bg="teal.200" color='teal.600'>Description</Text>
            <UnorderedList>
                <ListItem color="teal.400">{unit.description}</ListItem>
            </UnorderedList>
            <Text bg="teal.200" color='teal.600'>Attack Bonus</Text>
                    <OrderedList p='2'>
                    {unit?.attack_bonus?.map((bon) => {
                    return <ListItem color='teal.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
            </Box>  
        )
    }

    if(unit.age === 'Castle') {

        return (
         <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
            <Heading as='h3' size='md' textAlign='center' color='pink.800' bg='pink.400' py='2'>{unit.name}</Heading>
            <Flex>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Age:</Text> {unit.age} </Text>
            <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Build Time:</Text> {unit.build_time} </Text>
            </Flex>
            <Flex>
            <Text color='pink.400' flex="50%"><Text color='pink.600' as='b'>Movement Rate:</Text> {unit.movement_rate} </Text>
            <Text color='pink.400' flex="50%"><Text color='pink.600' as='b'>Line of Sight:</Text> {unit.line_of_sight} </Text>
            </Flex>
            <Flex>
            <Text color='pink.400' flex="50%"><Text color='pink.600' as='b'>Hit Points:</Text> {unit.hit_points} </Text>
            <Text color='pink.400' flex="50%"><Text color='pink.600' as='b'>Range:</Text> {unit.range} </Text>
            </Flex>
            <Flex>
            <Text color='pink.400' flex="50%"><Text color='pink.600' as='b'>Attack:</Text> {unit.attack} </Text>
            <Text color='pink.400' flex="50%" ><Text color='pink.600' as='b'>Accuracy:</Text> {unit.accuracy} </Text>
            </Flex>
            {unit?.created_in ? <Text color='pink.400' textTransform='capitalize'><Text color='pink.600' as='b'>Applies to:</Text> {modify(unit.created_in)}</Text> : ''}
            
           
            <Box>
                <Text  bg="pink.200" color='pink.600'>Cost</Text>
            </Box>
            <UnorderedList>
                <Flex>
                { unit?.cost?.Wood ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Wood:</Text> {unit.cost.Wood}</Text>: '' }
                { unit?.cost?.Food ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Food:</Text> {unit.cost.Food}</Text>: '' }
                { unit?.cost?.Gold ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Gold:</Text> {unit.cost.Gold}</Text>: '' }
                { unit?.cost?.Stone ? <Text color='pink.400' flex='50%'><Text color='pink.600' as='b'>Stone:</Text> {unit.cost.Stone}</Text>: '' }
                </Flex>
             </UnorderedList>
            <Text bg="pink.200" color='pink.600'>Description</Text>
            <UnorderedList>
                <ListItem color="pink.400">{unit.description}</ListItem>
            </UnorderedList>
            <Text bg="pink.200" color='pink.600'>Attack Bonus</Text>
                    <OrderedList p='2'>
                    {unit?.attack_bonus?.map((bon) => {
                    return <ListItem color='pink.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
            </Box>  
        )
    }
}

export default UnitBox;