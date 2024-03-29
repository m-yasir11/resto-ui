import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef image' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's World" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            Lorem epsum die maturely without knowing what is good or bad
          </p>
        </div>
        <p className='p__opensans'>
          Auctor himkk hdhi odht ergd fhbghj jvn uytf erghy jkool nveerrff gnumm
          jokkly tyuol demngh thrump poomk qwerk asdew reds fhujdd uilhg opkol
          molkji ertig himply welman enlaarge tysom polic fhjre
        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign image' />
      </div>
    </div>
  </div>
);

export default Chef;
