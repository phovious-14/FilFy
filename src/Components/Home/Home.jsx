import React from 'react'
import './style.css'
import bg from '../../assets/music_1.png'
import logo from '../../assets/logo_filfy.png';
const Home = () => {
  return (
    <div className='home'>
        <img className='logo' src={logo} alt="" />
        <div className='content'>
            <h1>Filfy... &nbsp;&nbsp; <img src={bg} alt="" /> </h1>
            <h2>Musify Your Time In Filfy</h2>
        </div>
    </div>
  )
}

export default Home