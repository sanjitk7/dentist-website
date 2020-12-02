
import React from 'react';
import '../experts/experts.scss'
import Expert from '../../assets/experts.png'
import SubmitForm from '../sumbitform/sumbitform.js';
import BottomNav from '../bottomnav/bottomnav.js';
import Nav from '../../assets/icons8-menu-24.png'
function Experts() {
  return (
    <div>
      <div className='backgroundexpert'>
        <div className='backgroundexperts'>
          <div className='backgroundexperts__logobox'>
            <div className='backgroundexperts__logobox__threedotnav'>
              <img

                src={Nav}
                alt='expert'
              />
              <div className='backgroundexperts__logobox__logoimage'>
                <div className='backgroundexperts__logobox__Swetha'>Swetha</div>
                <div className='backgroundexperts__logobox__dentistry'>DENTISTRY</div>
              </div></div>
          </div>
        </div>
        <div className='backgroundexpert__blue'>
          <div className='backgroundexpert__blue__bluerighttreatement'>
            <img
              className='backgroundexpert__blue__imageblueright'
              src={Expert}
              alt='expert'
            />
          </div>

          <div className='backgroundexpert__blue__blueleftdes'>Meet <br />Dr. Prashant Patil</div>
          <div className='backgroundexpert__blue__blueleftdessmall'>Combine your paid vacation with your dental <br />procedure<br /> schedule to save money or to get more value out of<br /> investment.</div>
          <div className='backgroundexpert__blue__number'>21 311+</div>
          <div className='backgroundexpert__blue__description'>Year of Experience</div>
          <div className='backgroundexpert__blue__description1'>Happy patients</div>
          <div className='backgroundexpert__blue__description2'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent<br /> further complications, the tooth may be extracted or it may be saved by a root canal<br /> treatment. Once root canal treatment is performed, the patient must usually have a crown <br />placed over the tooth to protect it and enhance its aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure in which<br /> the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and <br />sealed.</div>
          <div className='backgroundexpert__blue__description3'>Dental crowns are fabricated in the dental laboratory using the impression your dentist has<br /> made of your tooth after having prepared it. Because dental crowns encase the visible <br />portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can <br />be used to enhance the cosmetic appearance of a tooth.</div>

        </div>

        <div className='backgroundexpert__meetdoctor'>
          <div className='backgroundexpert__meetdoctor__treatmentblueleft'>
            <img
              className='backgroundexpert__meetdoctor__treatmentimage'
              src={Expert}
              alt='expert'
            />
            <div className='backgroundexpert__meetdoctor__treatmentheading'>Meet<br /> Dr. Prashant Patil
        <div className='backgroundexpert__meetdoctor__treatmentdes'>Combine your paid vacation with your dental<br /> procedure <br />schedule to save money or to get more value out of <br />investment.
        <div className='backgroundexpert__meetdoctor__number'>21 311+</div>
                <div className='backgroundexpert__meetdoctor__description'>Year of Experience</div>
                <div className='backgroundexpert__meetdoctor__description1'>Happy patients</div>
                <div className='backgroundexpert__meetdoctor__description2'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain <br />and prevent further complications, the tooth may be extracted or it may be saved <br />by a root canal treatment. Once root canal treatment is performed, the patient<br /> must usually have a crown placed over the tooth to protect it and enhance its<br /> aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure <br />in which the diseased or damaged pulp (core) of a tooth is removed and root<br /> canals are filled and sealed.</div>
                <div className='backgroundexpert__meetdoctor__description3'>Dental crowns are fabricated in the dental laboratory using the impression your<br /> dentist has made of your tooth after having prepared it. Because dental crowns<br /> encase the visible portion of a tooth, any porcelain crown (all-ceramic or <br />porcelain-fused-to-metal ones) can be used to enhance the cosmetic <br />appearance of a tooth.</div>




              </div>

            </div>
          </div>
        </div>
        <div className='backgroundexpert'> 
          <SubmitForm />
        
          <BottomNav />
        </div>

      </div>
    </div>

  );
}
export default Experts;

