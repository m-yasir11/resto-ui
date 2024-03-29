import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='images spoon' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dont do that greatest technical terms in this paragraph we
          should be more critical in your childhood designs of variety mangoes
          in jackfruit tree which had been planted by the aliens in the future
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife image' />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='images spoon' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dont do that greatest technical terms in this paragraph we
          should be more critical in your childhood designs of variety mangoes
          in jackfruit tree which had been planted by the aliens in the future
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
