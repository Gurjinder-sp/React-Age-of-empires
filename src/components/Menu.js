import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useContext, memo } from 'react';
import { FilterContext } from '../App';

const FilterMenu = ({selected}) => {
    const options = useContext(FilterContext);
   
    return(
        <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton color="gray.800" mr='2' isActive={isOpen} as={Button}>
        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon /> }
      </MenuButton>
      <MenuList bg='gray.800'>
        {options.map((opt) => { 
            return <MenuItem onClick={() => selected(opt)} key={opt.value} _hover={{color:'gray.800'}}>{opt.name} </MenuItem>})}
      </MenuList>
    </>
  )}
</Menu>
    )
}

export default memo(FilterMenu);