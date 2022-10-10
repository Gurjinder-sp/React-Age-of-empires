
import { useState, useEffect } from 'react';
import UnitBox from '../components/UnitBox'; 
import API from '../axios';
 import { 
    Flex,
  } from '@chakra-ui/react';

function UnitPage({title, loaded, selVal}) {
    const [units, setUnits] = useState([]);
    const [allUnits, setAllUnits] = useState([]);

    useEffect(() => {
        title('Units');
        loaded(false);

        API({
          method: 'get',
          url:'/units',
          withCredentials: false,
          headers: {
            crossOriginIsolated:false
          }
        }).then(res => {
          setUnits(res.data.units);
          setAllUnits(res.data.units);
          loaded(true);
            
      })
    },[]);

    useEffect(() => {
        filterExpansion(selVal);
        },[selVal]);
           

      const filterExpansion = (selVal) => {
        setUnits(allUnits);
        if(selVal?.value !== 5) {
            setUnits(allUnits.filter((opt) => {return opt.age === selVal?.name }));
        }
    }

    return (
        <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {units?.map((unt) => {return <UnitBox unit={unt} key={unt.id} />})}
      </Flex>
        </>
    )
}

export default UnitPage;