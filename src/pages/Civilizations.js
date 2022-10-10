

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
      })
    }, []);

    useEffect(() => {
    filterExpansion(selVal);
    },[selVal]);

    
    const filterExpansion = (selVal) => {
        setCivilizations(allCivilization);

        if(selVal?.value !== 6) {
            setCivilizations(allCivilization.filter((opt) => {return opt.expansion === selVal?.name }));
        }
    }

    const setOpenModalAndData = (data) => {
      setModalData(data)
      setModalOpen(true);
    }

    return (
      <>
        <Flex flexWrap='wrap' maxHeight='inherit' overflow='auto' maxH='94vh'>
        {civilizations.map((clz) => {return <Civilization clz={clz} key={clz.id} openDetails={(data) =>setOpenModalAndData(data)} />})}
      </Flex>
      <BasicModal isOpenT={modalOpen} isCloseT={() => setModalOpen(false)} data={modalData} />
      </>
      
    )
}