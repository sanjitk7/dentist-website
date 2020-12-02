import react from 'react';
import "./footer.css"

function Footer(){
    return(
        <section>
            <div className="footer-container">
            <div className="row d-flex full-height ">
                <div className="col-lg-4 h-100 d-flex justify-content-center align-items-center">
                <div id="our-locations" className="justify-content-center">
                    <div className="footer-heading footer-center">Our locations</div>
                    <div className="footer-text footer-center">Trust Pharmacy, 1st Floor, Beside GOLD HUB MALL, Main Rd, opp. K B N Hospital, Gulbarga, Karnataka 585102</div>
                    <button className="footer-button">Show on Maps</button>
                    <div className="footer-text footer-center">92, New Jewargi Rd, Bhagyavanti Nagar, Santosh Colony, Gulbarga, Karnataka 585102</div>
                    <button className="footer-button">Show on Maps</button>
                </div>
                    
                </div>
                <div className="col-lg-2 footer-col">
col-2
                </div>
                <div className="col-lg-3 footer-col">
                col-3
                </div>
                <div className="col-lg-3 footer-col">
                col-3
                </div>
            </div>
            </div>
        </section>
    )
}

export default Footer