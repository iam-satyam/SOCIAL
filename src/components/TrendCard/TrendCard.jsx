import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className="TrendCard">
    <h3>Trending in world...</h3>
     {TrendData.map((trend)=>{
        return (
            <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k Shares..</span>
            </div>
        )

     })

     }
    
      
    </div>
  )
}

export default TrendCard
