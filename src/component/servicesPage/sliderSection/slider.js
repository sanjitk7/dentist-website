import React from 'react';
import "./slider.css"
import "../meta/styles.css"
import sliderpic1 from "../../../assets/teeth1.png";
import sliderpic2 from "../../../assets/cosmetic_bonding.png";
// import play from "../../../assets/play.png";

function Slider(){
    return(
        <section id="slider-section">
            <div id="slider-row" className="row">
                <div id="container-slider-wrap" className="col-lg-7">
                <div id="container-slider">
                    <div id="greenbox-slider"></div>
                        <img id="sliderpic1" alt="sliderpic1" src={sliderpic1}/>
                        {/* <img id="playbutton" alt="playbutton" src={play}/> */}
                        <img id="sliderpic2" alt="sliderpic2" src={sliderpic2}/>

                </div>
                </div>
                <div className="col-lg-5">
                <div className="text-container-slider-right">
                    <br/><br/><br/><br/><br/><br/>
                    <div id="how-is-it-done-subheading" className="section-subheading">
                        How is <br/>it done?
                    </div>
                    <br/>
                    <div className="text-body">
                        Dental crowns are fabricated in the dental laboratory using the impression your dentist has made of your tooth after having prepared it. Because dental crowns encase the visible portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can be used to enhance the cosmetic appearance of a tooth.
                    </div>
                </div>
                </div>
            </div>
            {/* <br/><br/><br/><br/><br/><br/> */}
            <div className="row">
            <div id="nav-slider" className="col-lg-12 nav-slider">

            </div>
            </div>
        </section>
    );
}

export default Slider