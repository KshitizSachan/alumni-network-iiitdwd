import React, { useState } from "react";
import { Typography, Stack, Box, Button, Link, Paper } from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";
// import { fetcherGet } from "../../utils/axiosAPI";
import { fetcherPut } from "../../utils/axiosAPI";
import { fetcherDelete } from "../../utils/axiosAPI";
import { alumniEps } from "../../utils/AdminPanel/endpoints";
import VerifyConfirmDialog from "./Dialogs/VerfiyConfirmDialog";
import { toast } from "react-toastify";

const VerifyCard = ({ name, email, linkedin, id }) => {
  const [submitting, setSubmitting] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState("");

  const handleApprove = async () => {
    setSubmitting(true);
    const url = alumniEps?.verification?.approve;
    try {
      const res = await fetcherPut(url,{userID:id,verificationStatus:1});
      toast.success("Successfully Approved");
    } catch (err) {
      toast.error(err);
    }
    
    setSubmitting(false);
  };

  const handleReject = async () => {
    setSubmitting(true);
    const url = alumniEps?.verification?.reject;
    try {
      const res = await fetcherDelete(url,{userID:id});
      toast.success("Alumni Rejected");
    } catch (err) {
      toast.error(err);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Box
        component={Paper}
        sx={{
          boxShadow: 2,
          borderRadius: "0.5rem",
          padding: "0.625rem 0.875rem",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={500}>
            {name}
          </Typography>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Email />
            {/* <Typography variant='body1' fontWeight={500}>Email:</Typography> */}
            <Typography variant="body1" fontWeight={400}>
              {email}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <LinkedIn />
            <Link href={linkedin} underline="hover" color={"inherit"}>
              {linkedin}
            </Link>
            {/* <Typography variant='body1' fontWeight={500}>LinkedIn:</Typography> */}
            {/* <Typography variant='body1' fontWeight={400}>LinkedIn profile URL</Typography> */}
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              variant="outlined"
              color="success"
              onClick={() => setOpenConfirmDialog("Approve")}
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpenConfirmDialog("Reject")}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </Box>
      {openConfirmDialog !== "" && (
        <VerifyConfirmDialog
          isOpen={openConfirmDialog !== ""}
          onClose={() => setOpenConfirmDialog("")}
          confirmType={openConfirmDialog}
          handleConfirm={
            openConfirmDialog === "Approve" ? handleApprove : handleReject
          }
          submitting={submitting}
        />
      )}
    </>
  );
};

export default VerifyCard;
