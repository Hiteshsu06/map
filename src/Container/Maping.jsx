import React from 'react';
import './Maping.css';
import Mapin from './MOCK_DATA.json';


const Maping = () => {

  return (

    <div className='Main_top'>
    {Mapin.map((curElem) =>{
        const{first_name,last_name,img}=curElem;
        return(
            <div className='Main'>
            <div className='Main1'><img className="Main1_img" src={img} alt="puc" /></div>
            <div className='Main2'>{first_name}</div>
            <div className='Main3'>{last_name}</div>
         </div>
        )
    })}
    
    </div>
  )
}

export default Maping