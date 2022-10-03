import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'

const FilterMenu = ({selected}) => {

    const options = [
        {value:1, name:'Age of Kings'},
        {value:2, name:'The Conquerors'},
        {value:3, name:'Forgotten Empires'},
        {value:4, name:'Rise of Rajas'},
        {value:5, name:'African Kingdoms'},
        {value:6, name:'All'}
    ];

    // const selected = () => {}
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

export default FilterMenu;