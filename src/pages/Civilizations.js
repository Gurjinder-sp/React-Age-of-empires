

import Civilization from "../components/CivilizationBox";
import { useState, useEffect } from 'react';
import {
    Flex, Button
  } from '@chakra-ui/react';
import API from '../axios';
import BasicModal from "../components/Modal";

export const CivilizationPage = ({selVal,loaded, title}) => {
    const [civilizations, setCivilizations] = useState([]);
    const [allCivilization, setAllCivilizations] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
   
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
    // console.log('filterrr',selVal)
    filterExpansion(selVal);
    },[selVal]);

      // console.log('ab',selVal);
      // console.log('modal', modalOpen)
    
    const filterExpansion = (selVal) => {
        // console.log('called',selVal);
        // console.log('civil', civilizations);
        // console.log('all', allCivilization);
        setCivilizations(allCivilization);

        if(selVal?.value !== 6) {
            setCivilizations(allCivilization.filter((opt) => {return opt.expansion === selVal?.name }));
        }
    }

    const setOpenModalAndData = (data) => {
      console.log(data);
      setModalData(data)
      setModalOpen(true);
    }

    return (
      <>
        {/* <Button onClick={}>test</Button> */}

        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {civilizations.map((clz) => {return <Civilization clz={clz} key={clz.id} openDetails={(data) =>setOpenModalAndData(data)} />})}
      </Flex>
      <BasicModal isOpenT={modalOpen} isCloseT={() => setModalOpen(false)} data={modalData} />
      </>
      
    )
}