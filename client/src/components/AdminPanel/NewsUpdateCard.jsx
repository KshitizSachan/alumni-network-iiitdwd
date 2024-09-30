import React, { useState } from "react";
import Location from "../../assets/Components/Cards/Location.svg";
import _ from "lodash";
import Clock from "../../assets/Components/Cards/Clock.svg";
import StartDate from "../../assets/Components/Cards/StartDate.svg";
import Stipend from "../../assets/Components/Cards/Stipend.svg";
import Batch from "../../assets/Components/Cards/Batch.svg";
import { toast } from "react-toastify";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
  Link,
} from "@mui/material";
import { fetcherPost, fetcherGet } from "../../utils/axiosAPI";
import {
  EditOutlined,
  DeleteOutlined,
  LinkOutlined,
} from "@mui/icons-material";
import { alumniEps } from "../../utils/AdminPanel/endpoints";

const NewsUpdateCard = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [openDialog, setOpenDialog] = useState("");

  const handleAdd = async () => {
    setSubmitting(true);
    const url = "";
    const res = await fetcherGet(url);
    // TODO: handle the response
    setSubmitting(false);
  };

  const handleEdit = async () => {
    setSubmitting(true);
    const url = "";
    // TODO: handle the response
    setSubmitting(false);
  };

  const handleDelete = async () => {
    setSubmitting(true);
    const url = "";
    // TODO: handle the response
    setSubmitting(false);
  };

  return (
    <Box
      component={Paper}
      sx={{ padding: "1em", width: { xs: "100%", xl: "70%" }, boxShadow: 2 }}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Stack spacing={1}>
            <Stack
              spacing={3}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h5" fontWeight={700}>
                {props.title}
              </Typography>
              <Stack spacing={2} direction={"row"} alignItems={"center"}>
                <Button
                  variant="outlined"
                  color="info"
                  startIcon={<EditOutlined />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteOutlined />}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
            <Typography variant="body1">{props.description}</Typography>
          </Stack>
        </Grid>
        <Grid item container spacing={2} direction={"column"}>
          <Grid item container spacing={2}>
            <Grid item container spacing={1} direction={"row"}>
              {props.tags?.map((tag, index) => (
                <Grid item key={index + tag}>
                  <div className="px-4 py-1 bg-[#F5DEE7] border-2  h-fit border-[#FA005E] rounded-3xl text-xs  font-semibold">
                    {tag}
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems={"center"}>
                <Grid item>
                  <LinkOutlined color="disabled" />
                </Grid>
                <Grid item>
                  <Link href={props.link} color={"inherit"} underline="hover">
                    {props.link}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsUpdateCard;
