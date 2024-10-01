import React from 'react';
import Marquee from 'react-fast-marquee';
//import img1 from "../../assets/Amazon.svg"
//import img2 from "../../assets/Ibm.svg"
//import img3 from "../../assets/Increff.svg"
//import img4 from "../../assets/Infosys.svg"
//import img5 from "../../assets/Intel.svg"
//import img6 from "../../assets/Mahindra.svg"
//import img7 from "../../assets/Nvidia.svg"
//import img8 from "../../assets/Oracle.svg"
//import img9 from "../../assets/Tcs.svg"
//import img10 from "../../assets/Techmahindra.svg"

import './marquee.css';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: { cloudName: process.env.REACT_APP_CLOUINARY_CLOUD_NAME },
});


function MarqueeCompanies() {

  const img1 = cld
    .image('Amazon_cns00o')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img2 = cld
    .image('Ibm_vqqkcf')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img3 = cld
    .image('Increff_ew1bcz')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img4 = cld
    .image('Infosys_gg3rji')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img5 = cld
    .image('Intel_yrnc32')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img6 = cld
    .image('Mahindra_vh6xj5')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img7 = cld
    .image('Nvidia_vkyhya')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img8 = cld
    .image('Oracle_dxed13')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img9 = cld
    .image('Tcs_ndz1u9')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));

  const img10 = cld
    .image('Techmahindra_msxvsr')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).height(150));


  return (
    <div className="marquee_app">
      <div className="marquee_title">
        <h1 className="text-center text-3xl  font-semibold">FTO and Internships bagged by our Alumni</h1>
      </div>
      <div>
        <Marquee direction="left" speed={100}>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img1} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img2} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img3} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img4} alt=""/>
          </div>
          <div>
            <AdvancedImage cldImg={img5} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img6} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img7} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img8} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img9} alt=""/>
          </div>
          <div className="marquee_image_wrapper">
            <AdvancedImage cldImg={img10} alt=""/>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeCompanies;
