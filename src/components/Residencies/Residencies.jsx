import React from 'react';
import './residencies.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { text } from '../../constants'; // Fix the import statement
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

function Residencies() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };

  const galleryImages = [images.r1, images.r2, images.r3, images.r4, images.r5];

  return (
    <div className='r-wrapper'>
      <div className='r-container paddings innerWidth'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <div className='r-gallery-images paddings innerWidth'>
          <div className='r-gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className='r-gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="img" />
                <div className='r-details'>
                  <span className='secondaryText r-price'>
                    <span style={{color: 'orange'}}>$</span> <span>{text[1].price}</span> 
                   </span>
                  <span className='primaryText'>{text[2].name}</span> <br />
                  <span>{text[1].detail}</span>
                 
                </div>
              </div>
            ))}
          </div>

          <div className='r-gallery-images_arrows'>
            <BsArrowLeftShort className='r-gallery__arrow-icon' onClick={() => scroll('left')} />
            <BsArrowRightShort className='r-gallery__arrow-icon' onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </div>
  )
   }
   export default Residencies;