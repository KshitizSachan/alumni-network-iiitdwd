import NetworkHome from '../assets/NetworkHome.svg'
import jobHomeMobile from '../assets/jobHomeMobile.svg'
import newsHomeMobile from '../assets/newsHomeMobile.svg'
import { Link } from "react-router-dom";
import {PrimaryButton} from "../components/Buttons";
import SmallTextGeneration from './animations/TextRelated/SmallTextGeneration';
import SmallPinkTextGeneration from './animations/TextRelated/SmallPinkTextGeneration';
const StaticHome = ()=>
{
    

    return(
   <div className='flex flex-col items-center gap-8 p-4'>
        <img src={NetworkHome} alt='network' width="100%" height="auto" />
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
        <img src={jobHomeMobile} alt='network' width="100%" height="auto" />
        <div className='flex items-center gap-8'>
            <p>Looking For Jobs?</p>
            <Link to="/jobs">
                <PrimaryButton name="Find Jobs" />
            </Link>
        </div>
        <img src={newsHomeMobile} alt='network' width="100%" height="auto" />
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