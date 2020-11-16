import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentWeather, changeCity, getOtherDays } from "../Actions/Actions";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import './Main.scss'

function Main() {
  const cityId = useSelector((state) => state.system.activeCityId);
  const currentDayInfo = useSelector(state => state.system)

  const dispatch = useDispatch();


  const hanlerId = (id)=>{
    dispatch(changeCity(id))
  }

  useEffect(() => {
    dispatch(getCurrentWeather(cityId));
    dispatch(getOtherDays());
  }, [dispatch, cityId]);

  const cities = [
    {
        id: 1512569,
        title: 'Tashkent'
    },
    {
        id: 1514588,
        title: 'Andijan'
    },
    {
        id: 1217662,
        title: 'Bukhara'
    },
    {
        id: 1484845,
        title: 'Fergana'
    },
    {
        id: 1513886,
        title: 'Jizzakh'
    },{
        id: 1484843,
        title: 'Xorazm'
    },
    {
        id: 1513157,
        title: 'Namangan'
    },
    {
        id: 1513131,
        title: 'Navoiy'
    },
    {
        id: 1114928,
        title: 'Qashqadaryo'
    },
    {
        id: 1216265,
        title: 'Samarqand'
    },
    {
        id: 1484840,
        title: 'Sirdaryo'
    },
    {
        id: 1114926,
        title: 'Surxondaryo'
    }
];

  return (
    <div className="Main">
        <Sidebar changeCity={hanlerId} cities={cities} active={cityId}/>
        <Content currentDayInfo={currentDayInfo}/>
    </div>
);
}

export default Main;
