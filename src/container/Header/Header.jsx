import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='#home'>
    <div className='app__wrapper-info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Its a wonderful experience in th city to take a appointment and have fun
        in our restaurant. There is variety of desserts serving here .Come dont
        hesitate to have a great experience
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper-img'>
      <img src={images.welcome} alt='welcome.png' />
    </div>
  </div>
);

export default Header;
