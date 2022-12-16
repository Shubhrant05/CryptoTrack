import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../Style.css'
const Topbar = () => {
    return (
        <div className='topbar'>
            <span className='title'>Crypto Tracker</span>
            <div className='inactive-icons'>
                <span><AiOutlineSearch /></span>
                <span><GiHamburgerMenu /></span>
            </div>
        </div>
    )
}

export default Topbar