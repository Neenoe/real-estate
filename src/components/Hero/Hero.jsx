import React from 'react'
import './hero.css'
import hero from '../../assets/hero-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

function Hero() {
  return (  
    <div className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className='hero-left flexColStart'>
           <div className='hero-title'>
            <div className='orange-circle'/>

            
            <h1>Discover <br />
            Most Suitable <br />
             Property </h1>
           </div>
           

            <div className='hero-description flexColStart'>
                <span className='sedondaryText'>Find a variety of properties that suits you very easily</span>
                <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>

            </div>

            <div className=' flexCenter search-bar'>
                <HiLocationMarker color='var(--blue)' size={25}/>
                <input type="text" />
                <button className='button'>Search</button>

            </div>

            <div className='stats flexCenter'>
                <div className="stat flexColCenter">
                    <span>
                        <CountUp start={2000} end={10000} duration={12}/>
                        <span>+</span>

                    </span>
                    <span className='secondaryText'>Premium Products</span>

                </div>

                <div className="stat flexColCenter">
                    <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>

                    </span>
                    <span className='secondaryText'>Happy Customers</span>

                </div>

                <div className="stat flexColCenter">
                    <span>
                        <CountUp  end={20} duration={4}/>
                        <span>+</span>

                    </span>
                    <span className='secondaryText'>Award Winning</span>

                </div>

            </div>
            </div>

            <div className='hero-right flexCenter'>
                <div className='image-container'>
                    <img src={hero} alt="" />

                </div>

            </div>

        </div>

    </div>
  ) 
}

export default Hero 