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
                    <p className='text-6xl font-bold'>Connect with</p><p className='text-primaryPink text-6xl font-bold'>Alumni</p>
                </div><div className='flex gap-2'>
                    <p className='text-6xl font-bold'>Gain</p><p className='text-primaryPink text-6xl font-bold'>Opportunities</p>
                </div><div className='flex gap-2'>
                    <p className='text-6xl font-bold'>Boost your</p><p className='text-primaryPink text-6xl font-bold'>Career</p>
                </div>
            </div>

        </div>


        <div className='flex'>
            <img src={NetworkHome} alt='network' width="600" height="400" />
            <div className='flex flex-col justify-around'>
                <p className=' text-5xl font-semibold'>Intuitive Networking Platform Bridging Students and Alumni.</p>
                <p className='text-3xl'>
            Outstanding features which help in increasing <span className='text-primaryPink'>opportunities, collaboration, and innovation</span> of ideas.
        </p>
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
                    <p className='text-5xl font-semibold text-wrap'>Connect students and alumni with diverse </p>
                    <p className='text-5xl font-semibold bg-gradient-to-r mt-2 from-[#FA003C]/20 inline-block p-3 rounded-sm'>Job Opportunities.</p>
                </div>
                <p className='text-xl text-slate-600'>This job portal aims to provide not only students but also alumni with enhanced job opportunities to advance their individual careers.</p>
                <div className='flex justify-start items-center gap-6'>
                    <p className='text-3xl font-semibold text-'>Looking for openings?</p>
                    <Link to="/jobs">
                        <PrimaryButton name="Find Jobs" />
                    </Link>
                </div>
            </div>
            <img src={jobHome} alt='companylogo' style={{ width: '50%', height: 'auto' }} />
        </div>


        <div className='flex justify-between gap-6'>
            <img src={newsHome} alt='companylogo' style={{ width: '50%', height: 'auto' }} />
            <div className='flex flex-col justify-evenly'>
                <div>
                    <p className='text-5xl font-semibold text-wrap'>Stay Connected: Alumni Stay Abreast of College Events with the Latest Updates on </p>
                    <p className='text-5xl font-semibold bg-gradient-to-r mt-2 from-[#FA003C]/20 p-3 inline-block rounded-sm'>News Hub</p>
                </div>
                <p className='text-xl text-slate-600'>The news hub will serve to keep alumni abreast of the latest events and advancements at the college, ensuring they remain informed about campus activities.</p>
                <div className='flex justify-start items-center gap-6'>
                    <p className='text-3xl font-semibold'>Feeling Nostalgic?</p>
                    <Link to="/news">
                        <PrimaryButton name="Read News" />
                    </Link>
                </div>
            </div>
        </div>


    </div>
    );

}

export default StaticHome;