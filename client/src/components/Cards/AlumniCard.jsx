import {BorderButton} from "../Buttons";


const AlumniCard = (props) => {
  return (
    <>
      <div className="md:flex hidden md:justify-evenly">
        <div className="p-4 shadow-md rounded-md grid grid-cols-6 grid-rows-4 gap-x-3 w-full ">
          <img
            src="https://picsum.photos/536/354"
            alt={props.name}
            className="row-start-1 col-span-1 row-span-4 h-20 w-20 rounded-full"
          />

          <div
            className="row-start-1  col-span-3 row-span-2 flex items-center mb-4 justify-start text-2xl font-bold
    "
          >
            {props.name}
          </div>
          <div className="row-start-3 col-span-3 row-span-1 flex items-center   ">
            <span className="mr-2 font-thin text-sm ">
              {props.batch} || {props.branch}
            </span>
          </div>
          <div className="row-start-4  col-span-3 row-span-1 flex items-center  ">
            <span className="mr-2 font-thin text-sm ">
              {props.position} || at {props.company}
            </span>
          </div>

          <div className=" col-span-2 row-span-4 justify-center place-items-center row-start-1 flex">
            <BorderButton name="View Profile" />
            <div />
          </div>
        </div>
      </div>


      <div className="flex md:hidden justify-end">
        <div className="p-4 shadow-md rounded-md grid grid-cols-6 grid-rows-5 gap-x-3">

          <div className="row-start-1 col-span-2 row-span-5">
            <img
              src="https://picsum.photos/536/354"
              alt={props.name}
              className="row-start-1 col-span-2 row-span-4 h-16 w-28 rounded-full"
            />
            <div className="flex place-items-end">
              <BorderButton name="Profile" />
            </div>
          </div>


          <div className="row-start-1 col-start-3 col-span-4 row-span-5">
            <p className=" text-lg font-semibold"> {props.name}</p>
            <p className=" font-thin text-sm"> {props.batch}</p>
            <p className=" font-thin text-sm"> {props.branch}</p>
            <p className=" font-thin text-sm"> {props.position}</p>
            <p className=" font-thin text-sm"> {props.company}</p>

          </div>

          {/* <div className="col-span-2 row-span-4 justify-center place-items-center row-start-1 flex">
           <BorderButton name="View Profile" />
           <div /> */}
          {/* </div> */}
        </div>
      </div>
    </>

  );
};

export default AlumniCard;