import {useEffect, useState} from "react";
import Navbar from "../template/Navbar";
import { BorderButton } from "../components/Buttons";
import { Detail, EditDetails } from "../components/ProfileDetail";
import Notification from "../components/Notification";
import Footer from "../template/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import {useRecoilValue} from "recoil";
import {userAtom} from "../store/atoms/User";

const sample = {
  _id: 223123213,
  position: "Software Engineer",
  company: "Walmart",
  email: "johndoe@hotmail.com",
  batch: 2020,
  branch: "Computer Science and Engineering",
};

const sampleNotifications = [
  {id: 1, type: "REFERRAL_REQUEST", name: "Priyal", project: "", position: "SDE", company: "IIIT Dharwad", actionTaken: ""},
  {id: 2, type: "PROJECT_COLLAB_REQUEST", name: "Priyal", project: "mini project", position: "", company: "", actionTaken: ""},
  {id: 3, type: "PROJECT_COLLAB_RESPONSE", name: "Priyal", project: "mini project", position: "", company: "", actionTaken: "rejected"},
  {id: 4, type: "REFERRAL_RESPONSE", name: "Priyal", project: "", position: "SDE", company: "IIIT Dharwad", actionTaken: "accepted"},
  {id: 5, type: "REFERRAL_REQUEST", name: "Priyal", project: "", position: "SDE", company: "IIIT Dharwad", actionTaken: ""},
  {id: 6, type: "PROJECT_COLLAB_REQUEST", name: "Priyal", project: "mini project", position: "", company: "", actionTaken: ""},
  {id: 7, type: "PROJECT_COLLAB_RESPONSE", name: "Priyal", project: "mini project", position: "", company: "", actionTaken: "rejected"},
  {id: 8, type: "REFERRAL_RESPONSE", name: "Priyal", project: "", position: "SDE", company: "IIIT Dharwad", actionTaken: "accepted"}
]

const Profile = () => {
  const [data, setData] = useState(sample)
  const user= useRecoilValue(userAtom);

  useEffect(() => {
    console.log('User', user);
  }, [user]);


  const handleDetailChange = (title, event) => {
    setData({...data, [title]: event.target.value})
  }

  const handleEditFormOpen = () => {
    const modal = document.getElementById("edit-form")
    modal.showModal()
  }

  const handleEditFormClose = () => {
    const modal = document.getElementById("edit-form")
    modal.close()
  }

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="overflow-auto md:overflow-hidden h-auto md:h-[250px] lg:h-[350px] 2xl:h-[450px]">
          <img
            src="/IIITDWD.svg"
            alt="cover-img"
            className="w-full object-cover relative top-0 md:-top-[6em] -z-[1]"
          />
        </div>
        <div className="absolute bottom-0 right-3" onClick={handleEditFormOpen}>
          <BorderButton name={"Edit Profile"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="relative flex flex-col items-center md:w-[37%] lg:w-[30%] bg-[#d9d9d9]/40 gap-16 px-8">
          <div className="absolute -top-16 sm:-top-20 lg:-top-28 xl:-top-32 left-8 sm:left-auto overflow-hidden rounded-full size-32 sm:size-40 lg:size-52 xl:size-60 bg-gray-300 flex justify-center items-center">
            <img
              src="/dummy.jpg"
              alt="profile-img"
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-8 pt-28 md:pt-36">
            <div className="flex gap-1">
              <img src="/location-icon.svg" alt="" />
              <p className="text-base lg:text-xl font-poppins">
                Bangalore, Karnataka
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <a href="https://github.com/" target="blank">
                <img src="/github.svg" alt="github-icon" />
              </a>
              <a href="https://github.com/" target="blank">
                <img src="/twittor.svg" alt="twittor-icon" />
              </a>
              <a href="https://github.com/" target="blank">
                <img src="/linkedin.svg" alt="linkedin-icon" />
              </a>
            </div>
          </div>
          <div className="">{/* Projects floated section */}</div>
        </div>

        <div className="flex flex-col gap-14 px-8 pt-6 pb-40 bg-primaryBackground md:w-[63%] lg:w-[70%]">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 lg:items-center">
            <p className="font-poppins text-3xl xl:text-4xl">Kshitiz Sachan</p>
            <div className="flex gap-3">
              <div className="px-5 sm:px-7 py-2 bg-[#F5DEE7] border-2 border-[#FA005E] rounded-3xl text-xs sm:text-sm font-bold h-fit">
                Alumni
              </div>
              <div className="px-5 sm:px-7 py-2 bg-[#D9EFD3] border-2 border-[#3ACC16] rounded-3xl text-xs sm:text-sm font-bold text-center h-fit">
                Open for Mentorship
              </div>
            </div>
          </div>

          {/* Details and notifications */}
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-5 2xl:gap-14">
            <div className="flex flex-col gap-3">
              <Detail type={"Position"} detail={data.position} />
              <Detail type={"Company"} detail={data.company} />
              <Detail type={"Email"} detail={data.email} />
              <Detail type={"Batch"} detail={data.batch} />
              <Detail type={"Branch"} detail={data.branch} />
            </div>

            <div className="border border-solid border-black/20"></div>

            <div className="flex flex-col gap-6 h-[350px] px-3 pt-2 pb-5 overflow-y-auto w-fit">
              {sampleNotifications.map((item) => (
                <Notification key={item.id} type={item.type} name={item.name} project={item.project} position={item.position} company={item.company} actionTaken={item.actionTaken} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <dialog id="edit-form" className="backdrop:bg-black/40">
        <EditDetails data={data} handleEdit={handleDetailChange} handleFormClose={handleEditFormClose} />
      </dialog>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Profile;
