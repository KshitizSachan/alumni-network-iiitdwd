import React, { useEffect, useState } from "react";
import {
  Typography,
  Stack,
  Box,
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { toast } from "react-toastify";
import { fetcherPost, fetcherPut } from "../../utils/axiosAPI";
import DeleteDialog from "../AdminPanel/Dialogs/DeleteDialog";

const PollCard = ({ title, options = [], pollID, isMyPoll = false, userEmail = "", removePoll, updatePoll }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [displayStats, setDisplayStats] = useState(isMyPoll);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [updatedOptionStats, setUpdatedOptionStats] = useState(options);

  const handleVoteClick = async () => {
    if(selectedOption === null){
        toast.error("Select an option to vote");
    }
    else{
      setSubmitting(true);
      try {
        const body = {
          pollID: pollID,
          optionTitle: selectedOption,
          userEmail: userEmail
        };
        const res = await fetcherPut("/poll/castVote", { token: localStorage.getItem("token"), body });
        if(res?.msg){
          if(res?.updatedPoll){
            toast.success(res.msg);
            setUpdatedOptionStats(res?.updatedPoll?.options);
            updatePoll(res?.updatedPoll);
            setDisplayStats(true);
          } else {
            toast.error(res.msg);
          }
        }
      } catch (err) {
        if(typeof(err) === 'string') toast.error(err);
        console.log(err);
      }
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const checkIfVoted = () => {
      // eslint-disable-next-line
      options?.map((opt) => {
        if(opt?.votedUsers && opt?.votedUsers?.includes(userEmail)){
          setDisplayStats(true);
        }
      });
    }

    checkIfVoted();
    // eslint-disable-next-line
  }, [options])

  const handleDeleteConfirm = async () => {
    setSubmitting(true);
    try {
      const body = { pollID: pollID };
      const res = await fetcherPost("/poll/delete", { body });
      if(res?.msg) toast.success(res.msg);
      removePoll(pollID);
      setOpenDeleteConfirm(false);
    } catch (err) {
      if(typeof(err) === 'string') toast.error(err);
      console.log(err);
    }
    setSubmitting(false);
  }

  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: "fit-content",
          boxShadow: 2,
          borderRadius: "0.5rem",
          padding: "0.625rem 0.875rem",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h5" fontWeight={500}>
            {title ?? "Poll Title"}
          </Typography>
          {displayStats || isMyPoll ? (
            <Stack spacing={1.5}>
              {updatedOptionStats?.map((option) => (
                <Stack key={option._id} spacing={2} direction={"row"} alignItems={"center"}>
                  <Typography variant="body1" fontWeight={600}>
                    {`${option.voteCount} Votes`}
                  </Typography>
                  <Typography variant="body1">
                    {`- ${option.optionTitle}`}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          ) : (
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                  {updatedOptionStats?.map((option) => (
                      <FormControlLabel
                        value={option.optionTitle}
                        control={<Radio />}
                        label={option.optionTitle}
                      />
                  ))}
                  {/* <FormControlLabel value="female" control={<Radio />} label="Female" /> */}
              </RadioGroup>
            </FormControl>
          )}
          {!isMyPoll ? (
            <>
              {!displayStats && (
                <Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button variant="outlined" color="success" onClick={handleVoteClick}>
                    Vote
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setSelectedOption(null)}
                  >
                    Clear
                  </Button>
                </Stack>
              )}
            </>
          ) : (
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button variant="outlined" color="error" onClick={() => setOpenDeleteConfirm(true)}>
                Delete Poll
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
      {openDeleteConfirm && (
        <DeleteDialog isOpen={openDeleteConfirm} onClose={() => setOpenDeleteConfirm(false)} deleteType={"Poll"} submitting={submitting} handleConfirm={handleDeleteConfirm} />
      )}
    </>
  );
};

export default PollCard;
