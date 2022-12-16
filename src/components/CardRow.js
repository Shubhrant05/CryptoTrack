import React from 'react'
import TopCard from './topcard'
import img1 from '../Images/crypto.jpg'
const CardRow = () => {
  return (
    <div style={{ display : 'flex' , justifyContent : 'space-between' , marginTop: '1rem'}}>
        <TopCard img1 = {img1}  title = "Take a quiz!" content = "Learn and earn $CKB"/>
        <TopCard img1 = {img1} title = "Portfolio" content = "Track your trades in one place,not all over the place" />
        <TopCard img1 = {img1} title = "Portfolio" content = "Track your trades in one place,not all over the place"/>
    </div>
  )
}

export default CardRow