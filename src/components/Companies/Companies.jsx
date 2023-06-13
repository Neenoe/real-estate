import React from 'react'
import './companies.css'
import prologis from '../../assets/prologis.png'
import tower from '../../assets/tower.png'
import equinix from '../../assets/equinix.png'
import realty from '../../assets/realty.png'

function Companies() {
  return (
    <div className='c-wrapper'>
        <div className='c-container innerWidth flexCenter paddings'>
            <img src={prologis} alt="prologis" />
            <img src={tower} alt="tower" />
            <img src={equinix} alt="" />
            <img src={realty} alt="" />

        </div>

    </div>
  )
}

export default Companies