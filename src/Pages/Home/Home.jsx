import React from 'react'
import './Home.css';
import Homebanner from '../../Components/Homebanner/Homebanner';
import Feature from '../Feature/Feature';
import Year from '../../Components/Year/Year';
import Alumni from '../../Components/Alumni/Alumni';

const Home = ({ selectedOption, data }) => {
  return (
    <div className='Home'>
      <Homebanner selectedOption={selectedOption} data={data} />
      <Feature selectedOption={selectedOption} data={data}/>
      <Year selectedOption={selectedOption} data={data}/>
      <Alumni />
    </div>
  )
}

export default Home
