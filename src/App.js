import './App.css';
import API from './axios';
import { useEffect,useRef, useState} from 'react';
import {
  Box,
  Flex,
  Spinner
} from '@chakra-ui/react';
import {Route, Link, Routes} from 'react-router-dom';
// import BasicUsage from './components/Modal';\
import DrawerComp from './components/Drawer';
import Civilization from './components/CivilizationBox';
import Header from './components/Header';
import { StructurePage } from './pages/structures';
import { CivilizationPage } from './pages/Civilizations';



function App() {
  const[drawerOpen,setDrawer] = useState(false);
  const btnRef = useRef();

  const [civilizations, setCivilizations] = useState([]);
  const [allCivilization, setAllCivilizations] = useState([]);
  const [darkMode,setDarkMode] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({value:6,name:'All'});
  const [loaded,setLoaded] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  // const closeDrawer = () => {
  //   console.log('close drawer called');
  //   setDrawer(false);
  //   console.log(drawerOpen)
  // }

  useEffect(() => {
   console.log('drawer',selectedFilter)
   console.log('loaded',loaded)
 
  }, [selectedFilter.value]);

  useEffect(() => {
    console.log('title', pageTitle)
  },[pageTitle])

  // useEffect(() => {
  //   API({
  //     method: 'get',
  //     url:'/civilizations',
  //     withCredentials: false,
  //     headers: {
  //       crossOriginIsolated:false
  //     }
  //   }).then(res => {
  //     setCivilizations(res.data.civilizations);
  //     setAllCivilizations(res.data.civilizations);
  //   console.log(res)})
  // }, []);

  const selectedValue = (val) => {
    console.log('called',val);
    setSelectedFilter(val);
    console.log(selectedFilter);

    // console.log('civil', civilizations);
    // console.log('all', allCivilization);
    // setCivilizations(allCivilization);

    // if(val.value !== 6) {
    //  setCivilizations(allCivilization.filter((opt) => {return opt.expansion === val.name }));
    // }
  }

  const toggleTheme = (evt) => {
    console.log(evt)
    console.log(pageTitle)
    setDarkMode(evt);
  }

  
  return (
    <>
    <DrawerComp />

   <Header title={pageTitle} darkMode={darkMode} expansionSelected={(val) => setSelectedFilter(val)} toggleTheme={toggleTheme}/>
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
      <Route path="/structures" element={<StructurePage loaded={(val) => setLoaded(val)} title={(title) => setPageTitle(title)} />} />
    </Routes>
    
    </Box>

    
  </>
  );
}

export default App;
