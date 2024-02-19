import { useEffect, useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

const Notification = ({type, name, project, position, company, actionTaken}) => {
  const [content, setContent] = useState()

  const handleContent = () => {
    switch (type) {
      case "REFERRAL_REQUEST":
        setContent((
          <p className="font-poppins text-sm">
            <span className="font-semibold">{name}</span> has requested for a referral for{" "}
            <span className="font-medium">{position}</span> at{" "}
            <span className="font-medium">{company}</span>
          </p>
        ))
        break;

      case "PROJECT_COLLAB_REQUEST":
        setContent((
          <p className="font-poppins text-sm">
            <span className="font-semibold">{name}</span> applied to collaborate on{" "}
            <span className="font-medium">{project}</span>
          </p>
        ))
        break;

      case "PROJECT_COLLAB_RESPONSE":
        setContent((
          <p className="font-poppins text-sm">
            <span className="font-semibold">{name}</span> has{" "}
            <span className={actionTaken==="rejected" ? "text-[#BC0F0F]" : "text-[#2E8857]"}>{actionTaken}</span> your request to collaborate on{" "}
            <span className="font-medium">{project}</span>
          </p>
        ))
        break;

      case "REFERRAL_RESPONSE":
        setContent((
          <p className="font-poppins text-sm">
            <span className="font-semibold">{name}</span> has{" "}
            <span className={actionTaken==="rejected" ? "text-[#BC0F0F]" : "text-[#2E8857]"}>{actionTaken}</span> your request for referral for{" "}
            <span className="font-medium">{position}</span> at{" "}
            <span className="font-medium">{company}</span>
          </p>
        ))
        break;
    
      default:
        break;
    }
  }

  const handleAcceptClick = () => {

  };

  const handleDeclineClick = () => {
    
  };

  useEffect(() => {
    handleContent()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow-lg size-fit px-4 py-3 items-center w-auto md:w-[420px] lg:w-[556px] xl:w-[412px] justify-between">
      {content}
      {type.includes("REQUEST") && (
        <div className="flex gap-3">
          <button onClick={handleAcceptClick} className="rounded-full p-1 border-4 border-solid border-[#2E8857] text-[#2E8857] font-semibold">
              <FaCheck size={34} />
          </button>

          <button onClick={handleDeclineClick} className="rounded-full p-1 border-4 border-solid border-[#BC0F0F] text-[#BC0F0F]">
              <FaXmark size={34} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification
