import React from 'react'
import './InfoCard.css'
import { useState } from 'react';
import {UilPen} from  '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const[modalopenend,setModalOpened]=useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Information</h4>
        <div>
        <UilPen width='2rem' height='1rem' onClick={()=>setModalOpened(true)}/>
        <ProfileModal modalopenend={modalopenend} setModalOpened={setModalOpened}/></div>
      </div>
      <div className="info">
        <span>
            <b>Status</b>

        </span><span> Single</span>
      </div>
      <div className="info">
        <span>
            <b>Works at</b>

        </span><span> Office</span>
      </div>
      <div className="info">
        <span>
            <b>Live in</b>

        </span><span> India</span>
      </div>
      <button className="button logout-btn">LogOut</button>
    </div>
  )
}

export default InfoCard
