import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem Ipsum dufu kuggo pohgt weld fesw iomn bomihg relat pokil wemil
          kiju wervb pakkay komgul qerko porwid figp lima ara tu lorem ipsum
          thadu kombare rew trickd tomin
        </p>
        <button type='button' className='custom__button'>
          View more
        </button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((Image, index) => {
            return (
              <div
                className='app__gallery-images_card flex__center'
                key={`gallery_image-${index + 1}`}
              >
                <img src={Image} alt='gallery' />
                <BsInstagram className='gallery__image-icon' />
              </div>
            );
          })}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
