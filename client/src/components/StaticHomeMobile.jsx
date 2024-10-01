//import jobHomeMobile from '../assets/jobHomeMobile.svg'
//import newsHomeMobile from '../assets/newsHomeMobile.svg'
import { Link } from "react-router-dom";
import {PrimaryButton} from "../components/Buttons";
import SmallTextGeneration from './animations/TextRelated/SmallTextGeneration';
import SmallPinkTextGeneration from './animations/TextRelated/SmallPinkTextGeneration';


import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
    cloud: { cloudName: process.env.REACT_APP_CLOUINARY_CLOUD_NAME },
});


const StaticHome = ()=>
{
    const img = cld
      .image('alma matter/home/hpdzsbssylnwea7nrjmu')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop

  const jobs_img = cld
    .image('jobHomeMobile_nhpoqh')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop

  const scholarships_img = cld
    .image('newsHomeMobile_rtix3m')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop

    return(
   <div className='flex flex-col items-center gap-8 p-4'>
       <AdvancedImage cldImg={img} alt="network"/>
        {/*<img src={NetworkHome} alt='network' width="100%" height="auto" />*/}
        <div className='flex flex-col gap-5 items-center mb-6'>
            <div className='flex gap-2'>
                <SmallTextGeneration words={'Connect'} /><SmallTextGeneration words={'With'} /><SmallPinkTextGeneration words={'Alumni'} />
            </div><div className='flex gap-2'>
            <SmallTextGeneration words={'Gain'} /><SmallPinkTextGeneration words={'Opportunities'} />
            </div><div className='flex gap-2'>
            <SmallTextGeneration words={'Boost your'} /><SmallPinkTextGeneration words={'Career'} />
            </div>
        </div>
        <div className='text-decoration-line: underline pt-6'>
            <SmallPinkTextGeneration words={"FEATURES"}/>
        </div>
     <AdvancedImage cldImg={jobs_img} alt="jobs_page"/>
        {/*<img src={jobHomeMobile} alt='network' width="100%" height="auto" />*/}
        <div className='flex items-center gap-8'>
            <p>Looking For Jobs?</p>
            <Link to="/jobs">
                <PrimaryButton name="Find Jobs" />
            </Link>
        </div>
        {/*<img src={newsHomeMobile} alt='network' width="100%" height="auto" />*/}
     <AdvancedImage cldImg={scholarships_img} alt="scholarships_page"/>
        <div className='flex items-center gap-8 pb-10'>
            <p>Feeling Nostalgic?</p>
            <Link to="/news">
                <PrimaryButton name="Read News" />
            </Link>
        </div>
   </div>
    )
    
}

export default StaticHome;