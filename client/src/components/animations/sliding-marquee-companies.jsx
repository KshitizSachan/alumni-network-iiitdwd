import React from 'react';
import Marquee from 'react-fast-marquee';
// import img1 from '../../assets/pages/landing/companies/one.png';
// import img2 from '../../assets/pages/landing/companies/two.png';
// import img3 from '../../assets/pages/landing/companies/three.png';
// import img4 from '../../assets/pages/landing/companies/four.png';
// import img5 from '../../assets/pages/landing/companies/five.png';
// import img6 from '../../assets/pages/landing/companies/six.png';
// import img7 from '../../assets/pages/landing/companies/seven.png';
// import img8 from '../../assets/pages/landing/companies/eight.png';
// import img9 from '../../assets/pages/landing/companies/nine.png';
// import img10 from '../../assets/pages/landing/companies/ten.png';

import img1 from "../../assets/Amazon.svg"
import img2 from "../../assets/Ibm.svg"
import img3 from "../../assets/Increff.svg"
import img4 from "../../assets/Infosys.svg"
import img5 from "../../assets/Intel.svg"
import img6 from "../../assets/Mahindra.svg"
import img7 from "../../assets/Nvidia.svg"
import img8 from "../../assets/Oracle.svg"
import img9 from "../../assets/Tcs.svg"
import img10 from "../../assets/Techmahindra.svg"
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
            <img src={img1} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img2} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img3} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img4} alt="" className='size-24'/>
          </div>
          <div>
            <img src={img5} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img6} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img7} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img8} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img9} alt="" className='size-24'/>
          </div>
          <div className="marquee_image_wrapper">
            <img src={img10} alt="" className='size-24'/>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeCompanies;
