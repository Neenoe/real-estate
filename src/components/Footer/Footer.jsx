import React from 'react'
import logo from '../../assets/logo2.png'
import './footer.css'

function Footer() {
  return (
    <div className='f-wrapper'>
        <div className='f-container innerWidth flexCenter paddings'>
            <div className='flexColStart f-left'>
                <img src={logo} alt="" width={120} />
                <span>Our vision is to make all people <br />
                the best place to live for them
                </span>

            </div>

            <div className='f-right flexColStart'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>New York FL46453</span>

                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Property</span>

                    <span>Property</span>

                    <span>Property</span>


                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer