import React, { useState } from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'


const ProfileLeft = () => {
  const[modalopenend,setModalOpened]=useState(false);
  return (
    <div className='ProfileSide'>
    <LogoSearch/>
    <InfoCard/>
    
    <FollowersCard/>

      
    </div>
  )
}

export default ProfileLeft
