import React from 'react'
import SimpleButton from './SimpleButton'

const ButtonRow = () => {
  return (
    <div style={{
        display:'flex',
        width:'30%',
        justifyContent: 'space-between',
        textAlign:'left',
        marginBottom: '1rem'
    }}  >
        <SimpleButton name = 'Favorites'/>
        <SimpleButton name = 'CryptoCurrency'/>
        <SimpleButton name = 'DeFi'/>
        <SimpleButton name = 'NFT & Collectibles'/>
    </div>
  )
}

export default ButtonRow