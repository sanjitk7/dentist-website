import React from 'react';
import Meta from "./meta/meta.js";
import Endodontics from "./endodonticsSection/endodontics"
import PostEndodontics from "./postEndodonticsSection/postEndodontics"
import Slider from "./sliderSection/slider"

function Services() {
  return (
    <div className="App">
      <Meta/>
      <Endodontics/>
      {/* <PostEndodontics/> */}
      <Slider/>
      </div>
  );
}

export default Services;
