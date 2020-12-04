import React from 'react';
import Meta from "../servicesPage/meta/meta.js";
import TopPicture from "./topPictureSection.js/topPicture"
import ScheduleVisit from "../servicesPage/scheduleVisitSection/schedulevisit"
import Footer from "../servicesPage/footer/footer"


function Services() {
  return (
    <div className="App">
      <Meta/>
      <TopPicture/>
      {/* <ScheduleVisit/>
      <Footer/> */}
      </div>
  );
}

export default Services;
