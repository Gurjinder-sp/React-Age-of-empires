import { memo } from 'react';
import {
    Heading,
    Box,
    Text,
    OrderedList,
    ListItem
  } from '@chakra-ui/react';
function Civilization({clz}) {

    const modify = (str='') => {
        let ind = str.lastIndexOf('/') + 1;
        return str.slice(ind)
    }

    if(clz?.expansion === 'Age of Kings') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='blue.800' bg='blue.400' py='2'>{clz.name}</Heading>
                <Text color='blue.400'><Text color='blue.600' as='b'>Army Type:</Text> {clz.army_type} </Text>
                <Text color='blue.400'><Text color='blue.600' as='b'>Expansion:</Text> {clz.expansion} </Text>
                <Text color='blue.400'><Text color='blue.600' as='b'>Team Bonus:</Text> {clz.team_bonus} </Text>

                {clz?.unique_unit[0]?.length ? <Text color='blue.400'><Text color='blue.600' as='b'>Unique Unit:</Text> {modify(clz.unique_unit[0])}</Text> : ''}
                {clz?.unique_tech[0]?.length ? <Text color='blue.400'><Text color='blue.600' as='b'>Unique Tech:</Text> {modify(clz.unique_tech[0])}</Text> : ''}
                <Box mt='2'> <Text bg="blue.200" color='blue.600'>Civilization Bonus</Text>
                <OrderedList p='2'>
                    {clz.civilization_bonus.map((bon) => {
                    return <ListItem color='blue.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
                </Box>
            </Box>  
        )
        
    }

    if(clz?.expansion === 'The Conquerors') {
        return ( 
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='red.800' bg='red.400' py='2'>{clz.name}</Heading>
                <Text color='red.400'><Text color='red.600' as='b'>Army Type:</Text> {clz.army_type} </Text>
                <Text color='red.400'><Text color='red.600' as='b'>Expansion:</Text> {clz.expansion} </Text>
                <Text color='red.400'><Text color='red.600' as='b'>Team Bonus:</Text> {clz.team_bonus} </Text>

                {clz?.unique_unit[0]?.length ? <Text color='red.400'><Text color='red.600' as='b'>Unique Unit:</Text> {modify(clz.unique_unit[0])}</Text> : ''}
                {clz?.unique_tech[0]?.length ? <Text color='red.400'><Text color='red.600' as='b'>Unique Tech:</Text> {modify(clz.unique_tech[0])}</Text> : ''}
                <Box mt='2'> <Text bg="red.200" color='red.600'>Civilization Bonus</Text>
                <OrderedList p='2'>
                    {clz.civilization_bonus.map((bon) => {
                    return <ListItem color='red.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
                </Box>
            </Box> 
        )
    }

    if(clz?.expansion === 'Forgotten Empires') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
                <Heading as='h3' size='md' textAlign='center' color='purple.800' bg='purple.400' py='2'>{clz.name}</Heading>
                <Text color='purple.400'><Text color='purple.600' as='b'>Army Type:</Text> {clz.army_type} </Text>
                <Text color='purple.400'><Text color='purple.600' as='b'>Expansion:</Text> {clz.expansion} </Text>
                <Text color='purple.400'><Text color='purple.600' as='b'>Team Bonus:</Text> {clz.team_bonus} </Text>

                {clz?.unique_unit[0]?.length ? <Text color='purple.400'><Text color='purple.600' as='b'>Unique Unit:</Text> {modify(clz.unique_unit[0])}</Text> : ''}
                {clz?.unique_tech[0]?.length ? <Text color='purple.400'><Text color='purple.600' as='b'>Unique Tech:</Text> {modify(clz.unique_tech[0])}</Text> : ''}
                <Box mt='2'> <Text bg="purple.200" color='purple.600'>Civilization Bonus</Text>
                <OrderedList p='2'>
                    {clz.civilization_bonus.map((bon) => {
                    return <ListItem color='purple.400' key={bon}>{bon}</ListItem>
                    })}
                    </OrderedList>
                </Box>
            </Box>  
        )
    }

    if(clz?.expansion === 'Rise of Rajas') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100' >
            <Heading as='h3' size='md' textAlign='center' color='green.800' bg='green.400' py='2'>{clz.name}</Heading>
            <Text color='green.400'><Text color='green.600' as='b'>Army Type:</Text> {clz.army_type} </Text>
            <Text color='green.400'><Text color='green.600' as='b'>Expansion:</Text> {clz.expansion} </Text>
            <Text color='green.400'><Text color='green.600' as='b'>Team Bonus:</Text> {clz.team_bonus} </Text>

            {clz?.unique_unit[0]?.length ? <Text color='green.400'><Text color='green.600' as='b'>Unique Unit:</Text> {modify(clz.unique_unit[0])}</Text> : ''}
            {clz?.unique_tech[0]?.length ? <Text color='green.400'><Text color='green.600' as='b'>Unique Tech:</Text> {modify(clz.unique_tech[0])}</Text> : ''}
            <Box mt='2'> <Text bg="green.200" color='green.600'>Civilization Bonus</Text>
            <OrderedList p='2'>
                {clz.civilization_bonus.map((bon) => {
                return <ListItem color='green.400' key={bon}>{bon}</ListItem>
                })}
                </OrderedList>
            </Box>
        </Box>   
        )
    }

    if(clz?.expansion === 'African Kingdoms') {
        return (
            <Box borderWidth='1px' borderRadius='lg' p='3' m='2' flex='30%' boxShadow='base' bg='blackAlpha.100'>
              <Heading as='h3' size='md' textAlign='center' color='orange.800' bg='orange.400' py='2'>{clz.name}</Heading>
              <Text color='orange.400'><Text color='orange.600' as='b'>Army Type:</Text> {clz.army_type} </Text>
              <Text color='orange.400'><Text color='orange.600' as='b'>Expansion:</Text> {clz.expansion} </Text>
              <Text color='orange.400'><Text color='orange.600' as='b'>Team Bonus:</Text> {clz.team_bonus} </Text>

              {clz?.unique_unit[0]?.length ? <Text color='orange.400'><Text color='orange.600' as='b'>Unique Unit:</Text> {modify(clz.unique_unit[0])}</Text> : ''}
              {clz?.unique_tech[0]?.length ? <Text color='orange.400'><Text color='orange.600' as='b'>Unique Tech:</Text> {modify(clz.unique_tech[0])}</Text> : ''}
              <Box mt='2'> <Text bg="orange.200" color='orange.600'>Civilization Bonus</Text>
              <OrderedList p='2'>
              {clz.civilization_bonus.map((bon) => {
                return <ListItem color='orange.400' key={bon}>{bon}</ListItem>
              })}
              </OrderedList>
              </Box>
            </Box> 
        )
    }
}

export default memo(Civilization);