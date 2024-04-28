import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem, Select, FormControl, InputLabel, Stack
} from "@mui/material";
import { fetcherPost } from "../utils/axiosAPI";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/User";




const AddJobDialog = ({ isOpen, onClose, setFilters, refreshData }) => {
  const [jobDetails, setJobDetails] = useState({
    position: "",
    company: "",
    location: "",
    startDate: "",
    stipend: "",
    batch: "",
    postedBy: "",
    category: "",
    contact: "",
  });

  const user = useRecoilValue(userAtom);


  useEffect(() =>{
      console.log('User details from atom: ', user);
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddJob = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if all required fields are filled in
    if (
      !jobDetails.position ||
      !jobDetails.company ||
      !jobDetails.location ||
      !jobDetails.batch ||
      !jobDetails.startDate ||
      !jobDetails.stipend ||
      !jobDetails.category ||
      !jobDetails.contact 
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    const url = "/job/create";


    const body = {

      floatedBy: user.basic.name,
      jobLocation: jobDetails.location,
      companyName: jobDetails.company,
      eligibleBatch: jobDetails.batch.split(","),
      title: jobDetails.position,
      stipend: jobDetails.stipend,
      startDate: jobDetails.startDate,
      category: jobDetails.category === 'job' ? '0' : '1',
      handler: user.basic.email,
      whatsappNo: jobDetails.contact,
      createdAt: Date.now()
    };

    console.log(body);

    try {
      const response = await fetcherPost(url, { body });
      if (response && response.msg === "Job Floated Successfully.") {
        onClose();
        toast.success("Job added successfully");
        fetchUpdatedJobs();
        refreshData();

      } else {
        toast.error("Failed to add job");
      }
    } catch (error) {
      console.error("Error adding job:", error);
      toast.error("Error adding job");
    }
  };

  const fetchUpdatedJobs = async () => {
    setFilters({
      myjobs: false,
      addjob: false,
      jobs: false,
      internships: false,
      year2022: false,
      year2023: false,
      year2024: false,
      year2025: false,
      year2026: false,
      year2027: false,
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Job</DialogTitle>
      <DialogContent>
        <TextField
          label="Job Position"
          type="text"
          name="position"
          fullWidth
          value={jobDetails.position}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          label="Company Name"
          type="text"
          name="company"
          fullWidth
          value={jobDetails.company}
          onChange={handleChange}
          margin="dense"
        />

       <div> <FormControl fullWidth margin="dense">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          label="Category"
          name="category"
          value={jobDetails.category}
          onChange={handleChange}
        >
          {/* Define the dropdown options */}
          <MenuItem value="job">Job</MenuItem>
          <MenuItem value="internship">Internship</MenuItem>
        </Select>
      </FormControl>
    </div>
        <TextField
          label="Location"
          type="text"
          name="location"
          fullWidth
          value={jobDetails.location}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          label="Batch(es)"
          type="text"
          name="batch"
          placeholder="eg: 22,23,24..."
          fullWidth
          value={jobDetails.batch}
          onChange={handleChange}
          margin="dense"
        />
        
        <TextField
          label="Stipend (in ₹)"
          type="text"
          name="stipend"
          fullWidth
          value={jobDetails.stipend}
          onChange={handleChange}
          margin="dense"
        />
        
        {/* <TextField
          label="Posted By"
          type="text"
          name="postedBy"
          fullWidth
          value={jobDetails.postedBy}
          onChange={handleChange}
          margin="dense"
        /> */}
         {/* <TextField
          label="Email ID"
          type="email"
          name="emailId"
          fullWidth
          value={jobDetails.emailId}
          onChange={handleChange}
          margin="dense"
        /> */}
        <TextField
          label="Contact Number"
          type="tel"
          name="contact"
          fullWidth
          value={jobDetails.contact}
          onChange={handleChange}
          margin="dense"
          inputProps={{ minLength: 10,maxLength: 10 }}
        />
        <div className="flex">
        <p className=" mt-6 mr-8 ml-1">START DATE:</p>
        <TextField
          label=""
          type="date"
          name="startDate"
          value={jobDetails.startDate}
          onChange={handleChange}
          margin="dense"
        /></div>
      </DialogContent>
      <Stack width={'100%'} justifyContent={'space-between'} alignItems={'center'} direction={'row'} spacing={2} sx={{ padding: '1em' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddJob} variant="contained" color="primary">
          Add
        </Button>
      </Stack>
    </Dialog>
  );
};

export default AddJobDialog;





// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
// import { fetcherPost } from '../utils/axiosAPI';

// const AddJobDialog = ({ isOpen, onClose }) => {
//   const [jobDetails, setJobDetails] = useState({
//     position: '',
//     company: '',
//     location: '',
//     startDate: '',
//     stipend: '',
//     batch: '',
//     postedBy: '',
//     category: '',
//   });

//   useEffect(() => {
//     console.log(jobDetails);
//   }, [jobDetails]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setJobDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const url = "/job/create"
//   const handleAddJob = async () => {
//     console.log(jobDetails);
//     const body = {
//       floatedBy: jobDetails.postedBy,
//       jobLocation: jobDetails.location,
//       companyName: jobDetails.company,
//       eligibleBatch: jobDetails.batch,
//       title: jobDetails.position,
//       stipend: jobDetails.stipend,
//       startDate: jobDetails.startDate,
//       category: jobDetails.category,
//       handler: jobDetails.postedBy,
//       whatsappNo: jobDetails.contact

//     };
//     console.log('Sending data to backend:', body);
//     try {
//       const response = await fetcherPost(url, {body});
//       if(response.msg==="Job Floated Successfully."){
//           onClose();
// }
//       else {
//       console.error('Failed to add job:', response); // Log the response if not successful
//       }
//     } catch (error) {
//       console.error('Error adding job:', error);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onClose={onClose}>
//       <DialogTitle>Add Job</DialogTitle>
//       <DialogContent>
// <TextField
//   label="Job Position"
//   type="text"
//   name="position"
//   fullWidth
//   value={jobDetails.position}
//   onChange={handleChange}
//   margin="dense"
// />

// <TextField
//   label="category('0'-Job/'1'-Internship)"
//   type="text"
//   name="category"
//   fullWidth
//   value={jobDetails.category}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Location"
//   type="text"
//   name="location"
//   fullWidth
//   value={jobDetails.location}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Batch(es)"
//   type="text"
//   name="batch"
//   fullWidth
//   value={jobDetails.batch}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Start Date"
//   type="text"
//   name="startDate"
//   fullWidth
//   value={jobDetails.startDate}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Stipend"
//   type="text"
//   name="stipend"
//   fullWidth
//   value={jobDetails.stipend}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Posted On (yyyy-mm-dd)"
//   type="text"
//   name="posted"
//   fullWidth
//   value={jobDetails.posted}
//   onChange={handleChange}
//   margin="dense"
// />
// <TextField
//   label="Posted By"
//   type="text"
//   name="postedBy"
//   fullWidth
//   value={jobDetails.postedBy}
//   onChange={handleChange}
//   margin="dense"
// />
//  <TextField
//   label="Contact Number"
//   type="phone"
//   name="contact"
//   fullWidth
//   value={jobDetails.contact}
//   onChange={handleChange}
//   margin="dense"
// />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleAddJob} variant="contained" color="primary">
//           Add
//         </Button>
//         <Button onClick={onClose}>Cancel</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddJobDialog;
