import Navbar from "../template/Navbar"
import { BorderButton } from "../components/Buttons";
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
      <div className="relative">
        <div className="absolute -top-20 lg:-top-32 left-20 xl:left-28 overflow-hidden rounded-full size-44 md:size-40 lg:size-52 xl:size-60">
          <img src="/rnd.jpg" alt="profile-img" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center pt-40 xl:w-[37%] bg-[#d9d9d9]/40 gap-16">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex gap-1 items-center">
              <img src="/location-icon.svg" alt="" />
              <p className="text-xl font-poppins">Bangalore, Karnataka</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <img src="/github.svg" alt="github-icon" />
              <img src="/twittor.svg" alt="twittor-icon" />
              <img src="/linkedin.svg" alt="linkedin-icon" />
            </div>
          </div>
          <div className="">
            {/* Projects floated section */}
          </div>
        </div>

        <div className="flex flex-col px-8 py-6 bg-primaryBackground xl:w-[63%]">
          <div className="flex gap-8 items-center">
            <p className="font-poppins text-4xl">Kshitiz Sachan</p>
            <div className="flex gap-3">
              <div className="px-7 py-2 bg-[#F5DEE7] border-2 border-[#FA005E] rounded-3xl text-sm font-bold">
                Alumni
              </div>
              <div className="px-7 py-2 bg-[#D9EFD3] border-2 border-[#3ACC16] rounded-3xl text-sm font-bold">
                Open for Mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
