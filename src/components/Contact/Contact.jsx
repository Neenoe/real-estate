import React from 'react'
import './contact.css'
import log from '../../assets/hero-image.png'
import {MdCall} from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


function Contact() {
  return (
    <div className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>

            <div className='c-left flexColStart'>
           <span className='orangeText'>Our Contact</span>
           <span className='primaryText'>Easy to contact us</span>
           <span className='secondaryText'>We actually think we are going to be the first time in history and </span>

           <div className='flexRowStart contactModes'>
            <div className='flexStart row'>
                <div className='flexCenter mode'>
                    <div className='flexStart'>
                        <div className="flexCenter icon">
                            <MdCall size={25}/>

                        </div>

                        <div className='flexColStart detail'>
                            <span className='primaryText'>Call</span>
                            <span>021 123 145 14</span>

                        </div>

                    </div>

                    <div className='flexCenter button'>
                    Call Now
                    </div>

                </div>

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>

                        </div>

                        <div className='flexColStart detail'>
                            <span className='primaryText'>Chat</span>
                            <span>021 123 145 14</span>

                        </div>

                    </div>

                    <div className='flexCenter button'>
                    Chat Now
                    </div>

                </div>

            </div>

            {/* seconf row */}

            <div className='flexStart row'>
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className="flexCenter icon">
                            <MdCall size={25}/>

                        </div>

                        <div className='flexColStart detail'>
                            <span className='primaryText'>Video Call</span>
                            <span>021 123 145 14</span>

                        </div>

                    </div>

                    <div className='flexCenter button'>
                    VideoCall Now
                    </div>

                </div>

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>

                        </div>

                        <div className='flexColStart detail'>
                            <span className='primaryText'>Message</span>
                            <span>021 123 145 14</span>

                        </div>

                    </div>

                    <div className='flexCenter button'>
                    Message Now
                    </div>

                </div>

            </div>

           </div>
              

            </div>

            <div className="c-right">
                <div className='image-container'>
               
                <img src={log} alt="" />

                </div>

            </div>

        </div>

    </div>
  )
}

export default Contact