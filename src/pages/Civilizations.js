

import Civilization from "../components/CivilizationBox";
import { useState, useEffect } from 'react';
import {
    Flex
  } from '@chakra-ui/react';
import API from '../axios';

export const CivilizationPage = ({selVal,loaded, title}) => {
    const [civilizations, setCivilizations] = useState([]);
    const [allCivilization, setAllCivilizations] = useState([]);
   
    useEffect(() => {
        title('Civilizations');
        loaded(false);

        API({
          method: 'get',
          url:'/civilizations',
        }).then(res => {
          setCivilizations(res.data.civilizations);
          setAllCivilizations(res.data.civilizations);
          loaded(true);
        console.log(res)})
    }, []);

    useEffect(() => {
    console.log('filterrr',selVal)
    filterExpansion(selVal);
    },[selVal]);

      console.log('ab',selVal)
    
    const filterExpansion = (selVal) => {
        console.log('called',selVal);
        console.log('civil', civilizations);
        console.log('all', allCivilization);
        setCivilizations(allCivilization);

        if(selVal?.value !== 6) {
            setCivilizations(allCivilization.filter((opt) => {return opt.expansion === selVal?.name }));
        }
    }

    return (
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {civilizations.map((clz) => {return <Civilization clz={clz} key={clz.id} />})}
      </Flex>
    )
}