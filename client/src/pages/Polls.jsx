import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/User";
import PollCard from "../components/Cards/PollCard";
import AddPollDialog from "../components/AddPollDialog";
import { Grid, Typography } from "@mui/material";
import { fetcherGet } from "../utils/axiosAPI";

const Polls = () => {
  const user = useRecoilValue(userAtom);
  const [displayPolls, setDisplayPolls] = useState([]);
  const [allPolls, setAllPolls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMyPolls, setViewMyPolls] = useState(false);
  const [openAddPoll, setOpenAddPoll] = useState(false);

  const getAllPolls = async () => {
    setLoading(true);
    try {
      
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleAllPollsClick = () => {
    setViewMyPolls(false);
  }

  const handleMyPollsClick = () => {
    setViewMyPolls(true);
  }

  return (
    <>
      <div
        className={`bg-backgroundColor ${
          (user?.basic?.rank === 3 || user?.basic?.rank === -1) && "h-screen"
        }`}
      >
        <Navbar />
        {(user?.basic?.rank === 3 || user?.basic?.rank === -1) && (
          <div className="mx-14 py-14">
            <p style={{ marginTop: "75px" }}></p>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Typography
                className="flex justify-center"
                // style={{ marginBottom: "1rem" }}
              >
                Want to view and vote in polls? Login using iiitdwd college mail
              </Typography>
            </Grid>
          </div>
        )}
        <div className="pt-32 px-16 flex flex-col gap-5 items-center">
            {(user?.basic?.rank !== 3 && user?.basic?.rank !== -1) && (
              <div className="flex gap-4 items-center">
                <button
                  className="flex p-2 m-2 text-md font-semibold text-black bg-white rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out  "
                  style={{
                    letterSpacing: "0.075em",
                    borderWidth: "1.25px",
                  }}
                  onClick={() => setOpenAddPoll(true)}
                >
                  Add Poll
                </button>
                <button
                  className={`flex p-2 m-2 text-md font-semibold ${viewMyPolls ? "text-white bg-black" : "text-black bg-white"} rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out`}
                  style={{
                    letterSpacing: "0.075em",
                    borderWidth: "1.25px",
                  }}
                  onClick={handleMyPollsClick}
                >
                  My Polls
                </button>
                <button
                  className={`flex p-2 m-2 text-md font-semibold ${!viewMyPolls ? "text-white bg-black" : "text-black bg-white"} rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out`}
                  style={{
                    letterSpacing: "0.075em",
                    borderWidth: "1.25px",
                  }}
                  onClick={handleAllPollsClick}
                >
                  All Polls
                </button>
              </div>
            )}
          {loading ? (
            <div className="flex justify-center">
              <p className=" text-primaryPink font-bold font-poppins text-xl px-6 py-4">
                Loading...
              </p>
            </div>
          ) : displayPolls?.length === 1 ? (
            <div className="flex justify-center">
              <p className=" text-primaryPink font-bold font-poppins text-xl px-6 py-4">
                No Polls Found
              </p>
            </div>
          ) : (
            <>
                <PollCard title={"Title for Poll1"} user={user} isMyPoll={viewMyPolls} options={[]} pollID={""} />
            </>
          )}
        </div>
        <div
          className={`${
            (user?.basic?.rank === 3 || user?.basic?.rank === -1) &&
            "flex lg:absolute lg:bottom-0 w-screen"
          }`}
        >
          <Footer />
        </div>
      </div>
      {openAddPoll && (
        <AddPollDialog open={openAddPoll} onClose={() => setOpenAddPoll(false)} />
      )}
    </>
  );
};

export default Polls;
