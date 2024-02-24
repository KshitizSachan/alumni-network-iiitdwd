import Amazon from '../assets/Amazon.svg'
import Ibm from '../assets/Ibm.svg'
import Intel from '../assets/Intel.svg'
import Nvidia from '../assets/Nvidia.svg'

const Company = ()=>
{
    return(
    
    <div className='flex flex-col justify-around gap-10 py-10 my-6 bg-gradient-to-r from-grad1/30 via-grad2/15 to-grad1/30'>
        <h1 className='text-center text-3xl  font-semibold'>FTO and Internships bagged by our Alumni</h1>
        <div className='flex flex-row justify-evenly flex-wrap gap-5'>
            <img src={Nvidia} alt='companylogo' width="200" height="50" />
            <img src={Intel} alt='companylogo' width="200" height="50" />
            <img src={Amazon} alt='companylogo' width="200" height="50" />
            <img src={Ibm} alt='companylogo' width="200" height="50" />
        </div>
    </div>
    );

}

export default Company;