import { Heading, Flex, Switch } from '@chakra-ui/react';
import FilterMenu from './Menu';

const Header = (props) => {

    const selExpansion = (opt) => {
        props.expansionSelected(opt)
    }
    return (
        <><Flex bg='gray.800' color='white' py='2' alignContent='center'>
            <Heading textAlign='center' flex="70%">
            {props.title}</Heading>
            <FilterMenu selected={(opt) => props.expansionSelected(opt)}  flex="25%" mr='2'/>
            <Switch size='lg' mt='2' mr='2' onChange={() => props.toggleTheme(!props.darkMode)} id='color_toggle' />
            <hr/>
        </Flex>
     </>
    )
}

export default Header;