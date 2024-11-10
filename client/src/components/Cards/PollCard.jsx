import React, { useState } from "react";
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

const PollCard = ({ title, options = [], pollID, isMyPoll = false, user }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVoteClick = async () => {
    if(selectedOption === null){
        toast.error("Select an option to vote");
    }
    else{
      try {
        // write the post or get request handling here
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
            >
                {options?.map((option) => (
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                ))}
                <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          {!isMyPoll ? (
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
          ) : (
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button variant="outlined" color="error" onClick={() => {}}>
                Delete Poll
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default PollCard;
