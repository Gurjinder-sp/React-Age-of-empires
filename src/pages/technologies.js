import { useEffect, useState } from 'react';
import API from '../axios';
import {TechBox} from '../components/TechBox';
 import {   Box,
    Flex,
    Spinner
  } from '@chakra-ui/react';

function Technology({title,loaded }) {
    const [techList, setTechs] = useState([]);


    useEffect(() => {
        title('Technologies');
        loaded(false);

        API({
          method: 'get',
          url:'/technologies',
          withCredentials: false,
          headers: {
            crossOriginIsolated:false
          }
        }).then(res => {
          setTechs(res.data.technologies);
          loaded(true);
            
        console.log(res)})
      }, []);

    return (
        <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {techList?.map((clz) => {return <TechBox tech={clz} key={clz.id} />})}
      </Flex>
        </>
    )
}

export default Technology;