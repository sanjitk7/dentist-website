import React from 'react';
import './loadingPage.scss';
import Nopath from '../../assets/NoPath.png'
// import { Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Tooth from '../../assets/Tooth.I13.2k.png'

function LoadingPage() {
  return (
    
    <div>
      
      <div className='background'>
       

          <div className='background__logobox'>
     <div className='background__logobox__logoimage'>
             <div className='background__logobox__Swetha'>Swetha</div>
                <div className='background__logobox__dentistry'>DENTISTRY</div>       
       </div>     
        </div>
       <div className='background__text__wherescience'>WHERE SCIENCE </div>
        <div className='background__text__meetsart'>MEETS ART </div> 
        <span>
          <img
            className='background__cloudleft'
            src={Nopath}
            align="left"
            alt='cloud'
          />

        </span>
        <span>
          <img
            className='background__teeth '
            src={Tooth}
            align="left"
            alt='cloud'
          />
        </span>
        <span>
          <img
            className='background__cloudright '
            src={Nopath}
            align="right"
            alt='cloudright'
          />
        </span>
         <div className='menu'>
<nav >
                  <ul >
                    <li >
                      <a href="#">EXPERIENCE DENTISTRY</a>
                      
                    </li>
                    <li >
                      <a href="#">OUR EXPERTS</a>
                    </li>
                    <li>
                      <a href="#">BUZZ</a>
                    </li>
                    <li>
                      <a href="#">ABOUT</a>
                    </li>
                    <li>
                      <a href="#">SCHEDULE A VISIT</a>
                    </li>
                  </ul>
          </nav>
           
          </div>
      </div>

    </div>


  );
}

export default LoadingPage;

