import React, {useState} from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import{UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'


const RightSide = () => {
  const[modalopenend,setModalOpened]=useState(false);
  return (
    <div className="RightSide">
    <div className="navIcons">
    <img src={Home} alt=""></img>
    <UilSetting/>
    <img src={Noti} alt=""></img>
    <img src={Comment} alt=""></img>


    </div>
      <TrendCard/>
      <button className='button r-button' onClick={()=>setModalOpened(true)}>Share</button>
    <ShareModal modalopenend={modalopenend} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
