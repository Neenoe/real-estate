import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './values.css'
import value from '../../assets/value.png'
import data from '../../components/Values/data'
import { MdOutlineArrowDropDown } from 'react-icons/md';

function Values() {
  return (
    <div className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src={value} alt="" />
                </div>
            </div>

            {/* right side */}
            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for you <br />
                    We believe a good placve to live can make your life better
                </span>



            <Accordion 
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            > {
                    data.map((item, i) => {
                        return (
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                                <AccordionItemHeading>
                                <AccordionItemButton className='accordionButton flexCenter'>

                                    
                                    <div className='flexCenter icon'>{item.icon}
                                    <span className='primaryText'>{item.heading}</span>

                                    <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20}/>

                                    </div>

                                    </div>
                                </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <div>
                                        <p className=' need secondaryText'>{item.detail }</p>
                                    </div>
                                </AccordionItemPanel>
                              

                            </AccordionItem>
                        )
                    })
              }

            </Accordion>
            </div>

        </div>

    </div>
  )
}

export default Values