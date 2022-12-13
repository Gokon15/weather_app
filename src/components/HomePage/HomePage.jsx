import React from 'react';
import Input from './Input/Input';
import SearchedWeather from './SearchedWeather/SearchedWeather';
import Cards from './Cards/Cards';


const HomePage = () => (
    <div className=" homepage max-s  ">
      <Input />
      <div>
        <SearchedWeather />
        <Cards />
      </div>
    </div>
  );

export default HomePage;
