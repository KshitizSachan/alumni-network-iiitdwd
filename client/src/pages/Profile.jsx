import Navbar from "../template/Navbar";
import { BorderButton } from "../components/Buttons";
import ProfileDetail from "../components/ProfileDetail";
import Footer from "../template/Footer";

const sample = {
  position: "Software Engineer",
  company: "Walmart",
  email: "johndoe@hotmail.com",
  batch: 2020,
  branch: "Computer Science and Engineering",
};

const Profile = () => {
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
        <div className="absolute bottom-0 right-3">
          <BorderButton name={"Edit Profile"} />
        </div>
      </div>
      {/* <div className="relative">
        <div className="absolute -top-16 sm:-top-20 lg:-top-28 xl:-top-32 left-6 sm:left-14 lg:left-20 xl:left-28 2xl:left-36 overflow-hidden rounded-full size-32 sm:size-40 lg:size-52 xl:size-60">
          <img src="/rnd.jpg" alt="profile-img" className="w-full object-cover" />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row">
        <div className="relative flex flex-col items-center md:w-[37%] bg-[#d9d9d9]/40 gap-16 px-8">
          <div className="absolute -top-16 sm:-top-20 lg:-top-28 xl:-top-32 left-8 sm:left-auto overflow-hidden rounded-full size-32 sm:size-40 lg:size-52 xl:size-60">
            <img
              src="/rnd.jpg"
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
              <img src="/github.svg" alt="github-icon" />
              <img src="/twittor.svg" alt="twittor-icon" />
              <img src="/linkedin.svg" alt="linkedin-icon" />
            </div>
          </div>
          <div className="">{/* Projects floated section */}</div>
        </div>

        <div className="flex flex-col gap-14 px-8 py-6 bg-primaryBackground md:w-[63%]">
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
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <ProfileDetail type={"Position"} detail={sample.position} />
              <ProfileDetail type={"Company"} detail={sample.company} />
              <ProfileDetail type={"Email"} detail={sample.email} />
              <ProfileDetail type={"Batch"} detail={sample.batch} />
              <ProfileDetail type={"Branch"} detail={sample.branch} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
