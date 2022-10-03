import { useEffect, useState } from 'react';
import API from '../axios';
import {CivilStruct} from '../components/StructureBox';
 import {   Box,
    Flex,
    Spinner
  } from '@chakra-ui/react';

export const StructurePage = ({loaded, title}) => {
    const [structList, setStructures] = useState([]);
    
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
          loaded(true);
            
        console.log(res)})
      }, []);

    return (
        <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {structList.map((clz) => {return <CivilStruct struct={clz} key={clz.id} />})}
      </Flex>
        </>
    )
}