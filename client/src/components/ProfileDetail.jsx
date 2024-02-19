import { PrimaryButton } from "./Buttons";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = ({ type, detail }) => {
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      toastId: "copied",
    });
  };

  return (
    <>
      <div className="flex justify-between bg-white border border-[#8a8a8a] rounded-xl px-3 py-2 sm:w-80 font-poppins gap-4">
        <div className="flex flex-col">
          <p className="text-xs 2xl:text-sm text-black/50">{type}</p>
          <p className="text-sm 2xl:text-base">{detail}</p>
        </div>
        <img
          src="/copy-icon.svg"
          alt="copy-icon"
          className="cursor-pointer"
          onClick={() => handleCopyClick(detail)}
        />
      </div>
    </>
  );
};

const EditDetails = ({ handleEdit, handleFormClose, data }) => {

  const handleSaveClick = async () => {
    // api call to update details with data._id
    toast.success("Saved successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      toastId: "editsaved",
    });
    handleFormClose()
  }

  return (
    <>
      <div className="flex flex-col gap-8 px-10 py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-poppins text-black/70">Position</p>
            <input type="text" value={data.position} onChange={e => handleEdit("position", e)} className="py-2 px-3 border border-black/50 rounded-lg md:w-80" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-poppins text-black/70">Company</p>
            <input type="text" value={data.company} onChange={e => handleEdit("company", e)} className="py-2 px-3 border border-black/50 rounded-lg md:w-80" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-poppins text-black/70">Email</p>
            <input type="text" value={data.email} onChange={e => handleEdit("email", e)} className="py-2 px-3 border border-black/50 rounded-lg md:w-80" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-poppins text-black/70">Batch</p>
            <input type="text" value={data.batch} onChange={e => handleEdit("batch", e)} className="py-2 px-3 border border-black/50 rounded-lg md:w-80" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center md:items-end">
          <div className="flex flex-col gap-1">
            <p className="font-poppins text-black/70">Branch</p>
            <input type="text" value={data.branch} onChange={e => handleEdit("branch", e)} className="py-2 px-3 border border-black/50 rounded-lg md:w-80" />
          </div>

          <div onClick={handleSaveClick}>
            <PrimaryButton name={"SAVE"} />
          </div>
        </div>
      </div>
    </>
  );
};

export { Detail, EditDetails };
