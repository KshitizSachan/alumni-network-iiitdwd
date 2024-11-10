import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import {
  Grid,
  TextField,
  Pagination,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/User";
import PollCard from "../components/Cards/PollCard";

const Polls = () => {
  const user = useRecoilValue(userAtom);
  const [displayPolls, setDisplayPolls] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className={`bg-backgroundColor ${
          (user?.basic?.rank === 3 || user?.basic?.rank === -1) && "h-screen"
        }`}
      >
        <Navbar />
        {/* {(user?.basic?.rank === 3 || user?.basic?.rank === -1) && (
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
        )} */}
        <div className="pt-32 px-16 flex flex-col gap-5 items-center">
          <div className="flex gap-4 items-center">
            <button
              className="flex p-2 m-2 text-md font-semibold text-black bg-white rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out  "
              style={{
                letterSpacing: "0.075em",
                borderWidth: "1.25px",
              }}
            >
              <img
                src="/plus.svg"
                alt="actions-icon"
                className="mt-1.5 mr-2 ml-1"
              />
              Add Poll
            </button>
            <button
              className="flex p-2 m-2 text-md font-semibold text-black bg-white rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out  "
              style={{
                letterSpacing: "0.075em",
                borderWidth: "1.25px",
              }}
            >
              My Polls
            </button>
            <button
              className="flex p-2 m-2 text-md font-semibold text-black bg-white rounded-md border border-black hover:bg-black hover:text-white hover:shadow-md transition duration-300 ease-in-out  "
              style={{
                letterSpacing: "0.075em",
                borderWidth: "1.25px",
              }}
            >
              All Polls
            </button>
          </div>
          {loading ? (
            <div className="flex justify-center">
              <p className=" text-primaryPink font-bold font-poppins text-xl px-6 py-4">
                Loading...
              </p>
            </div>
          ) : displayPolls?.length === 0 ? (
            <div className="flex justify-center">
              <p className=" text-primaryPink font-bold font-poppins text-xl px-6 py-4">
                No Polls Found
              </p>
            </div>
          ) : (
            <>
                <PollCard />
            </>
          )}
        </div>
        {/* <div
          className={`${
            (user?.basic?.rank === 3 || user?.basic?.rank === -1) &&
            "flex lg:absolute lg:bottom-0 w-screen"
          }`}
        >
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default Polls;
