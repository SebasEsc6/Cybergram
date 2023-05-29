import React from 'react'
import BttnHome from '../../../assets/Multimedia/imgs/Icon-Home.png'
import { useNavigate } from 'react-router-dom';

function Gohome() {
  const navigate = useNavigate();

    const Register = () => {
      navigate('/home');
    };


  return (
    <button className='GoHome' onClick={Register}>
      <img src={BttnHome} ></img>
    </button>
  )
}

export default Gohome