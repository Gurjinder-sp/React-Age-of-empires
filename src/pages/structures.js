import { useEffect, useState } from 'react';
import API from '../axios';
import {CivilStruct} from '../components/StructureBox';
 import { 
    Flex,
  } from '@chakra-ui/react';

export const StructurePage = ({loaded, title, selVal}) => {
    const [structList, setStructures] = useState([]);
    const [allStructList, setAllStructList] = useState([]);
    
    useEffect(() => {
        title('Structures');
        loaded(false);

        API({
          method: 'get',
          url:'/structures',
          withCredentials: false,
          headers: {
            crossOriginIsolated:false
          }
        }).then(res => {
          setStructures(res.data.structures);
          setAllStructList(res.data.structures);
          loaded(true);
            
        console.log(res)})
      }, []);

      useEffect(() => {
        console.log('filterrr',selVal)
        filterExpansion(selVal);
        },[selVal]);
           
        const filterExpansion = (selVal) => {
            console.log('called',selVal);
            if(selVal?.value !== 5) {
                setStructures(allStructList.filter((opt) => {return opt.age === selVal?.name }));
            }
            console.log(structList)
        }

    return (
        <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {structList.map((clz) => {return <CivilStruct struct={clz} key={clz.id} />})}
      </Flex>
        </>
    )
}