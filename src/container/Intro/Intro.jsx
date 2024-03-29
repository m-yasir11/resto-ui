import React from "react";
import { useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const vidRef = React.useRef();
  const [PlayVideo, seTPlayVideo] = useState(false);

  const handleVideo = () => {
    seTPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (PlayVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className='app__video'>
      <video
        ref={vidRef}
        src={meal}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {PlayVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
