import { BorderButton, PrimaryButton } from "./Buttons";
import Location from "../assets/Components/Cards/Location.svg";
import StartDate from "../assets/Components/Cards/StartDate.svg";
import Stipend from "../assets/Components/Cards/Stipend.svg";
import Batch from "../assets/Components/Cards/Batch.svg";
import Clock from "../assets/Components/Cards/Clock.svg";
import Applicants from "../assets/Components/Cards/Applicants.svg";

const ProjectCard = (props) => {
  return (
    <div className="flex justify-center">
      <section
        className="flex flex-col text-wrap my-2 p-4 rounded-lg shadow-md bg-white-100 w-11/12
      md:grid md:grid-cols-3 md:grid-rows-5 md:w-7/12"
      >
        <div className="md:grid md:col-span-1 md:row-span-5 md:gap-1">
          <i className="text-xs font-semibold text-yellow-400">
            {props.developmentGenre}
          </i>
          <p className=" text-md font-bold text-black-800">
            {props.projectTitle}
          </p>
          <p className="text-gray-700">By: {props.handlerName}</p>
          <p className="text-gray-700">{props.techStack}</p>
          <div className=" flex m-1">
            <img src={Applicants} alt="applicants" className="w-4 h-4 m-1" />
            {props.applicants}
          </div>
        </div>
        <p className="md:grid md:col-span-2 md:row-span-1"></p>
        <p className="md:grid md:col-span-2 md:row-span-5">
          {props.description}
        </p>
        <div className=" flex justify-center mt-2 md:flex md:col-span-3 md:justify-end">
          <PrimaryButton name="APPLY" />
          <BorderButton name="Handler Profile" />
        </div>
      </section>
    </div>
  );
};

const JobsCard = (props) => {
  return (
    <>
      <div className="flex justify-center" style={{maxWidth:'880px'}}>
        <div
          className=" text-wrap rounded-lg shadow-md bg-white-100 w-11/12  
        sm:w-7/12 pt-3 pb-3"
        >
          <div>
            <p className=" px-2 font-bold text-xl text-gray-800">
              {props.jobPosition}
            </p>
            <p className="  flex flex-col px-2 font-semibold text-gray-500">
              {props.company}
            </p>
          </div>
                   <div className=" flex m-2">
            <img src={Location} alt="Location" className="w-4 h-4 m-1" />
            {props.location}
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

            <p className="ml-8">{props.startDate}</p>
            <p className="ml-8">{props.stipend}</p>
            <p className="ml-8">{props.batch}</p>
            <p className="ml-10">{props.postedBy}</p>
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
              <p className="ml-2">{props.startDate}</p>
            </div>
            <div className="flex items-center m-2 ml-3">
              <img src={Stipend} alt="Stipend" className="w-4 h-4" />
              <p className="hidden sm:block">Stipend</p>
              <p className="ml-2">{props.stipend}</p>
            </div>
            <div className="flex items-center m-2 ml-3">
              <img src={Batch} alt="Batch" className="w-4 h-4" />
              <p className="hidden sm:block">Batch</p>
              <p className="ml-2">{props.batch}</p>
            </div>
            <div className="flex items-center m-2 ml-3 ">
              <img src={Clock} alt="Posted By" className="w-4 h-4" />
              <p className="hidden sm:block">Posted By</p>
              <p className="ml-2">{props.postedBy}</p>
            </div>
            <div className=" flex items-center m-2 ml-3 sm:hidden ">
              <img src={Clock} alt="posted at" className="w-4 h-4  " />
              <p className="ml-2">{props.posted}</p>
            </div>
          </div>

          <div className="flex justify-evenly">
            <PrimaryButton name="Apply" />
           <div className="hidden md:block"><BorderButton name="Request for Referal" />
           </div> 
           <div className="md:hidden"><BorderButton name ="Referal"/></div>
           <div className="hidden md:block"><BorderButton name="View Profile" />
           </div> 
           <div className="md:hidden"><BorderButton name ="Profile"/></div>
          </div>
        </div>
      </div>

    </>
  );
};

export { ProjectCard, JobsCard };
