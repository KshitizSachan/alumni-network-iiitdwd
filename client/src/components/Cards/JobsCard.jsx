import Location from "../../assets/Components/Cards/Location.svg";
import _ from "lodash";
import Clock from "../../assets/Components/Cards/Clock.svg";
import StartDate from "../../assets/Components/Cards/StartDate.svg";
import Stipend from "../../assets/Components/Cards/Stipend.svg";
import Batch from "../../assets/Components/Cards/Batch.svg";
import {BorderButton, PrimaryButton} from "../Buttons";
import {toast} from "react-toastify";


const JobsCard = (props) => {
  const rank=props.rank;
  const shouldBlur = (value) =>{
    if(rank == -1 && value != 'jobPosition')
      return 'blur-sm';
    else if(rank == 3 && value == 'postedBy')
      return 'blur-sm';
    return '';
  }

  return (
    <>
      <div className="flex " style={{ maxWidth: "1200px", minWidth: "1000px" }}>
        <div
          className=" text-wrap rounded-md shadow-md bg-white w-11/12
        sm:w-7/12 pt-3 pb-3 pr-3 pl-3"
        >
          <div>
            <p className=" px-2 font-bold text-xl text-gray-800 ">
              {props.jobPosition}
            </p>
            <p className="  flex flex-col px-2 font-semibold text-gray-500">
              {props.company}
            </p>
          </div>
          <div className=" flex m-2">
            <img src={Location} alt="Location" className="w-4 h-4 m-1" />
            {_.capitalize(props.location)}
          </div>
          <div className="flex m-2 ">
            <img src={Clock} alt="Posted By" className="w-4 h-4 m-1" />
            <p>Posted: {props.posted}</p>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:grid-rows-2 hidden">
            <div className="flex items-start m-2 ml-3 text-sm sm:ml-2">
              <img src={StartDate} alt="Start Date" className="w-4 h-4 m-1  " />
              <p className="hidden sm:block">START DATE:</p>
            </div>

            <div className="flex items-center m-2 ml-3">
              <img src={Stipend} alt="Stipend" className="w-4 h-4 m-1" />
              <p className="hidden sm:block">Stipend</p>
            </div>

            <div className="flex items-center m-2 ml-3">
              <img src={Batch} alt="Batch" className="w-4 h-4 m-1" />
              <p className="hidden sm:block">Batch</p>
            </div>

            <div className="flex items-center m-2 ">
              <img src={Clock} alt="Posted By" className="w-4 h-4 m-1" />
              <p className="hidden sm:block">Posted By</p>
            </div>

            <p className={`ml-8 ${shouldBlur('startDate')}`}>{props.startDate}</p>
            <p className={`ml-8 ${shouldBlur('stipend')}`}>₹{props.stipend}</p>
            <div className={`ml-8 ${shouldBlur('batch')}`}>
              {props.batch.map((item, index) => (
                <span key={index}>
                  {index > 0 && ','} {item}
                </span>
              ))}
            </div>
            <p className={`ml-8 ${shouldBlur('postedBy')}`}>{props.postedBy}</p>
          </div>

          <div className="sm:hidden">
            <div className="flex items-center m-2 ml-3 text-md">
              <img src={StartDate} alt="Start Date" className="w-4 h-4  " />
              <p
                className="hidden sm:block"
                style={{ letterSpacing: "0.05rem" }}
              >
                START DATE:
              </p>
              <p className={`ml-2 ${shouldBlur('startDate')}`}>{props.startDate}</p>
            </div>
            <div className="flex items-center m-2 ml-3">
              <img src={Stipend} alt="Stipend" className="w-4 h-4" />
              <p className="hidden sm:block">Stipend</p>
              <p className={`ml-2 ${shouldBlur('stipend')}`}>{props.stipend}</p>
            </div>
            <div className="flex items-center m-2 ml-3">
              <img src={Batch} alt="Batch" className="w-4 h-4" />
              <p className="hidden sm:block">Batch</p>
              <p className={`ml-2 ${shouldBlur('batch')}`}>{props.batch}</p>
            </div>
            <div className="flex items-center m-2 ml-3 ">
              <img src={Clock} alt="Posted By" className="w-4 h-4" />
              <p className="hidden sm:block">Posted By</p>
              <p className={`ml-2 ${shouldBlur('postedBy')}`}>{props.postedBy}</p>
            </div>
            <div className=" flex items-center m-2 ml-3 sm:hidden ">
              <img src={Clock} alt="posted at" className="w-4 h-4  " />
              <p className="ml-2">{props.posted}</p>
            </div>
          </div>

          <div className="flex justify-evenly">
            {rank==0||rank==1||rank==2? <PrimaryButton onClick={() => toast.error('Login from iiitdwd account to apply')} name="Apply" isDisabled={false} /> : <PrimaryButton name="Apply" isDisabled={true} /> }
            <div className="hidden md:block">
              <BorderButton name="Request for Referal" />
            </div>
            <div className="md:hidden">
              <BorderButton name="Referal" />
            </div>
            <div className="hidden md:block">
              <BorderButton name="View Profile" />
            </div>
            <div className="md:hidden">
              <BorderButton name="Profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default JobsCard;
