import './App.css';
import { useEffect, useState,useContext, createContext} from 'react';
import {
  Box,
  Flex,
  Spinner
} from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';
import DrawerComp from './components/Drawer';
import Header from './components/Header';
import { StructurePage } from './pages/structures';
import { CivilizationPage } from './pages/Civilizations';
import Technology from './pages/technologies';
import { civilizationFilterOptions, AgeFilterOptions} from "./filter.model";


export const FilterContext = createContext();


function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({value:6,name:'All'});
  const [loaded,setLoaded] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [filterOptions, setFilterOptions] = useState([]); 

  const toggleTheme = (evt) => {
    console.log(evt)
    console.log(pageTitle)
    setDarkMode(evt);
  }

  useEffect(() => {
      if(pageTitle === 'Civilizations') {
        setFilterOptions(civilizationFilterOptions);
      } else {
        setFilterOptions(AgeFilterOptions);
      }
  }, [pageTitle])

  return (
    <>
    <DrawerComp />
  <FilterContext.Provider value={filterOptions}>
   <Header title={pageTitle} darkMode={darkMode} expansionSelected={(val) => setSelectedFilter(val)} toggleTheme={toggleTheme}/>
   </FilterContext.Provider>
    <Box w='100%' bg={darkMode ? 'gray.800' : 'white'}>   
    { loaded ? '':
    <Flex justifyContent='center'>
    <Spinner
        thickness='8px'
        speed='0.65s'
        emptyColor='gray.200'
        color='black.500'
        size='xl'
      />
      </Flex>
    }
    <Routes>
      <Route path='/' element={<CivilizationPage selVal={selectedFilter} loaded={(val) => setLoaded(val)} title={(title) => setPageTitle(title)} />} />
      <Route path="/structures" element={<StructurePage selVal={selectedFilter} loaded={(val) => setLoaded(val)} title={(title) => setPageTitle(title)} />} />
      <Route path="/techs" element={<Technology loaded={(val) => setLoaded(val)} title={(title) => setPageTitle(title)} />} />
    </Routes>
    
    </Box>

    
  </>
  );
}

export default App;
