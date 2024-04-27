import Amazon from '../assets/Amazon.svg'
import Ibm from '../assets/Ibm.svg'
import Intel from '../assets/Intel.svg'
import Nvidia from '../assets/Nvidia.svg'
import NetworkHome from '../assets/NetworkHome.svg'
import jobHome from '../assets/jobHome.svg'
import newsHome from '../assets/newsHome.svg'
import {PrimaryButton} from "../components/Buttons";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react'
import TextGeneration from './animations/TextRelated/TextGeneration';
import SmallTextGeneration from './animations/TextRelated/SmallTextGeneration';
import SmallPinkTextGeneration from './animations/TextRelated/SmallPinkTextGeneration';
import BigTextGeneration from './animations/TextRelated/BigTextGeneration';
import BigPinkTextGeneration from './animations/TextRelated/BigPinkTextGeneration';
import { AwesomeButton } from "react-awesome-button";
import { TypeAnimation } from 'react-type-animation';
import OutlinedButton from '../components/animations/OutlinedButton';

const StaticHome = ()=>
{
    const countUpRef = useRef(null); 
    const [isCountUpStarted, setIsCountUpStarted] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView && !isCountUpStarted) {
        setIsCountUpStarted(true);
        if (countUpRef.current) {
         countUpRef.current.start();
        }
        }
    }, [inView, isCountUpStarted]);
    const customFormattingFn = (value) => {
        return `${value}+`;
      };

    return(
    <div className='flex flex-col gap-24 m-8'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2'>
                    <BigTextGeneration words={'Connect with'} /><BigPinkTextGeneration words={'Alumni'} />
                </div><div className='flex gap-2'>
                <BigTextGeneration words={'Gain'} /><BigPinkTextGeneration words={'Opportunities'} />
                </div><div className='flex gap-2'>
                <BigTextGeneration words={'Boost your'} /><BigPinkTextGeneration words={'Career'} />
                </div>
            </div>

        </div>


        <div className='flex'>
            <img src={NetworkHome} alt='network' width="600" height="400" />
            <div className='flex flex-col justify-around'>
                <TextGeneration words={'Intuitive Networking Platform Bridging Students and Alumni'} />
                <SmallTextGeneration words={'Outstanding features which help in increasing '} />
                <SmallPinkTextGeneration words={'opportunities, collaboration, and innovation'} />
                <SmallTextGeneration words={'of ideas'} />
                {/* <p className='text-3xl'>
            Outstanding features which help in increasing <span className='text-primaryPink'>opportunities, collaboration, and innovation</span> of ideas.
        </p> */}
            </div>
        </div>

        <div className='flex justify-evenly'>
            <div className='flex flex-col bg-gradient-to-r from-[#FA003C]/20 p-3 rounded-sm' ref={ref}>
                {isCountUpStarted && (
                <CountUp className='font-bold text-3xl' ref={countUpRef} start={0} end={800} duration={3} formattingFn={customFormattingFn} />
                )}
                <p className='font-semibold text-xl text-slate-600'>Alumni spread across India.</p>
            </div>
            <div className='flex flex-col bg-gradient-to-r from-[#FA003C]/20 p-3 rounded-sm'>
                {isCountUpStarted && (
                <CountUp className='font-bold text-3xl' ref={countUpRef} start={0} end={50} duration={3} formattingFn={customFormattingFn} />
                )}
                <p className='font-semibold text-xl text-slate-600'>Companies offered jobs.</p>
            </div>
            <div className='flex flex-col bg-gradient-to-r from-[#FA003C]/20 p-3 rounded-sm'>
                {isCountUpStarted && (
                <CountUp className='font-bold text-3xl' ref={countUpRef} start={0} end={10} duration={3} formattingFn={customFormattingFn} />
                )}
                <p className='font-semibold text-xl text-slate-600'>Average package of our alumni. </p>
            </div>
        </div>


        <div className='flex flex-col justify-around gap-10 py-10 my-6 bg-gradient-to-r from-grad1/30 via-grad2/15 to-grad1/30'>
            <h1 className='text-center text-3xl  font-semibold'>FTO and Internships bagged by our Alumni</h1>
            <div className='flex flex-row justify-evenly flex-wrap gap-5'>
                <img src={Nvidia} alt='companylogo' width="200" height="50" />
                <img src={Intel} alt='companylogo' width="200" height="50" />
                <img src={Amazon} alt='companylogo' width="200" height="50" />
                <img src={Ibm} alt='companylogo' width="200" height="50" />
            </div>
        </div>


        <div className='flex justify-between'>
            <div className='flex flex-col justify-evenly'>
                <div>
                    <p className='text-5xl font-semibold text-wrap' style={{ lineHeight: '1.5' }}>Connecting students and alumni unlocking</p>
                    <p className='text-5xl font-semibold bg-gradient-to-r mt-2 from-[#FA003C]/20 inline-block p-3 rounded-sm' style={{ lineHeight: '1.5' }}>
                    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Job Opportunities',
    1000,
    'Intern Opportunities',
    1000,
    'Felloship Opportunities',
    1000,
    'Research Opportunities',
    1000,
  ]}
  speed={50}
  repeat={Infinity}
/> 
                    </p>
                </div>
                <p className='text-xl text-slate-600'>This job portal aims to provide not only students but also alumni with enhanced job opportunities to advance their individual careers.</p>
                <div className='flex justify-start items-center gap-6'>
                    <p className='text-3xl font-semibold text-'>Looking for openings?</p>
                    <Link to="/jobs">
                        {/* <PrimaryButton name="Find Jobs" /> */}
                        <OutlinedButton clr="#FA005E" title={'Find Jobs'} />
                    </Link>
                </div>
            </div>
            <img src={jobHome} alt='companylogo' style={{ width: '50%', height: 'auto' }} />
        </div>


        <div className='flex justify-between gap-6'>
            <img src={newsHome} alt='companylogo' style={{ width: '50%', height: 'auto' }} />
            <div className='flex flex-col justify-evenly'>
                <div>
                    <p className='text-5xl font-semibold text-wrap' style={{ lineHeight: '1.5' }}>Stay Connected: Students Stay Abreast of Information with the Latest Updates on </p>
                    <p className='text-5xl font-semibold bg-gradient-to-r mt-2 from-[#FA003C]/20 p-3 inline-block rounded-sm' style={{ lineHeight: '1.5' }}>
                    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'College Events',
    1000,
    'Scholarships',
    1000,
    'Technical Events',
    1000,
    'Non-Technical Events',
    1000,
  ]}
  speed={50}
  repeat={Infinity}
/> 
                    </p>
                </div>
                <p className='text-xl text-slate-600'>The news hub will serve to keep alumni abreast of the latest events and advancements at the college, ensuring they remain informed about campus activities.</p>
                <div className='flex justify-start items-center gap-6'>
                    <p className='text-3xl font-semibold'>Feeling Nostalgic?</p>
                    <Link to="/news">
                        {/* <PrimaryButton name="Read News" /> */}
                        <OutlinedButton clr="#FA005E" title={'Read News'} />
                    </Link>
                </div>
            </div>
        </div>


    </div>
    );

}

export default StaticHome;