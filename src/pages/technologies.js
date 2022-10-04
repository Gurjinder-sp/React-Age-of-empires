import { useEffect, useState } from 'react';
import API from '../axios';
import {TechBox} from '../components/TechBox';
 import {   Box,
    Flex,
    Spinner
  } from '@chakra-ui/react';

function Technology({title,loaded, selVal }) {
    const [techList, setTechs] = useState([]);
    const [allTechList, setAllTechList] = useState([]);

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
          setAllTechList(res.data.technologies);
          loaded(true);
            
        console.log(res)})
      }, []);

      useEffect(() => {
        console.log('filterrr',selVal)
        filterExpansion(selVal);
        },[selVal]);
           

      const filterExpansion = (selVal) => {
        console.log('called',selVal);
        setTechs(allTechList);
        if(selVal?.value !== 5) {
            setTechs(allTechList.filter((opt) => {return opt.age === selVal?.name }));
        }
        // console.log(structLis)
    }

    return (
        <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {techList?.map((clz) => {return <TechBox tech={clz} key={clz.id} />})}
      </Flex>
        </>
    )
}

export default Technology;