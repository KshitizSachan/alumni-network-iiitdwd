import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/pages/landing/companies/one.png';
import img2 from '../../assets/pages/landing/companies/two.png';
import img3 from '../../assets/pages/landing/companies/three.png';
import img4 from '../../assets/pages/landing/companies/four.png';
import img5 from '../../assets/pages/landing/companies/five.png';
import img6 from '../../assets/pages/landing/companies/six.png';
import img7 from '../../assets/pages/landing/companies/seven.png';
import img8 from '../../assets/pages/landing/companies/eight.png';
import img9 from '../../assets/pages/landing/companies/nine.png';
import img10 from '../../assets/pages/landing/companies/ten.png';
import './marquee.css';

function MarqueeCompanies() {
  return (
    <div className="marquee_app">
      <div className="marquee_title">
        <h1 className="text-center text-3xl  font-semibold">FTO and Internships bagged by our Alumni</h1>
      </div>
      <div>
        <Marquee direction="left" speed={100}>
          <div className="marquee_image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="marquee_image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeCompanies;
