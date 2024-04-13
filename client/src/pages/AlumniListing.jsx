import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import { Grid, TextField } from "@mui/material";
import { JobsFilterButton } from "../components/jobsFilterButton";
import React, { useEffect, useState } from "react";
import useSWR from 'swr';
import { get_fetcher } from '../utils/Fetcher'
// import { AlumniCard } from "../components/Cards";
import AlumniCard from "../components/Cards/AlumniCard";
const _ = require('lodash')

const AlumniListing = () => {
  const { data, isLoading } = useSWR("http://localhost:5000/user/getAll", get_fetcher)
  console.log(data)

  const [filters, setFilters] = useState({
    All: true,
    CSE: false,
    DSAI: false,
    ECE: false,
    year2022: false,
    year2023: false,
    year2024: false,
    year2025: false,
    year2026: false,
    year2027: false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data) return;

    let filteredAlumni = data.filter((user) => {
      if (filters.year2022 && user.batch !== 2022) return false;
      if (filters.year2023 && user.batch !== 2023) return false;
      if (filters.year2024 && user.batch !== 2024) return false;
      if (filters.year2025 && user.batch !== 2025) return false;
      if (filters.year2026 && user.batch !== 2026) return false;
      if (filters.year2027 && user.batch !== 2027) return false;
      if (filters.CSE && user.branch !== "cse") return false;
      if (filters.ECE && user.branch !== "ece") return false;
      if (filters.DSAI && user.branch !== "dsai") return false;
      if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      return true;
    });

    setFilteredData(filteredAlumni);
  }, [data, filters, searchQuery]);


   

  const handleFilterClick = (filterName) => {
    setFilters((prevFilters) => ({
      // ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <>
      <div className='bg-backgroundColor'>
        <Navbar />
        <div className='mx-24 pt-14'>
          <p style={{ marginTop: "100px" }}></p>
          <Grid container>
            <Grid xs={3} className=''>
              <div className='bg-white min-h-40 pt-7 pb-7 rounded-md shadow-md hidden md:block'>
                <div className="flex justify-center w-full">
                  <TextField
                   label="Search..." 
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                </div>
                <Grid xs={12} className='flex justify-center mt-4 mb-2'>
                  <div className='flex font-bold'>
                    <div>
                      <img src="/filter_icon.svg"
                        alt="filter-icon"
                        className="mt-1.5 mr-1 h-6" />
                    </div>
                    <div className='ml-1 text-2xl'>
                      Filter
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className='flex justify-center'>
                  <div className="flex">
                    <div onClick={() => handleFilterClick('All')}>
                      <JobsFilterButton name="ALL" used={filters.All} />
                    </div>
                    <div onClick={() => handleFilterClick('CSE')}>
                      <JobsFilterButton name="CSE" used={filters.CSE} />
                    </div>
                    <div onClick={() => handleFilterClick('DSAI')}>
                      <JobsFilterButton name="DSAI" used={filters.DSAI} />
                    </div>
                    <div onClick={() => handleFilterClick('ECE')}>
                      <JobsFilterButton name="ECE" used={filters.ECE} />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className='flex justify-center'>
                  <div className="flex">
                    <div onClick={() => handleFilterClick('year2022')} className="">
                      <JobsFilterButton name="2022 BATCH" used={filters.year2022} />
                    </div>
                    <div onClick={() => handleFilterClick('year2023')} className="">
                      <JobsFilterButton name="2023 BATCH" used={filters.year2023} />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className='flex justify-center'>
                  <div className="flex">
                    <div onClick={() => handleFilterClick('year2024')} className="">
                      <JobsFilterButton name="2024 BATCH" used={filters.year2024} />
                    </div>
                    <div onClick={() => handleFilterClick('year2025')} className="">
                      <JobsFilterButton name="2025 BATCH" used={filters.year2025} />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className='flex justify-center'>
                  <div className="flex">
                    <div onClick={() => handleFilterClick('year2026')} className="">
                      <JobsFilterButton name="2026 BATCH" used={filters.year2026} />
                    </div>
                    <div onClick={() => handleFilterClick('year2027')} className="">
                      <JobsFilterButton name="2027 BATCH" used={filters.year2027} />
                    </div>
                  </div>
                </Grid>

              </div>
            </Grid>
            <Grid xs={1} className="flex items-center justify-center">
              <div className='h-full bg-greyLine w-0.5'></div>
            </Grid>


            <Grid xs={8} className="md:grid md:col-span-full">

              {isLoading ? (
               <p className=" text-primaryPink font-bold font-poppins text-3xl px-6 py-4 ">Loading...</p>
              ) : filteredData.length === 0 ? (
                <p className=" text-primaryPink font-bold font-poppins text-3xl px-6 py-4 "> No results found.....</p>

              ): (
                             
                  filteredData.map((alumni, index) => (
                    <div key={index}>
                      <AlumniCard
                        name={alumni.name}
                        batch={alumni.batch}
                        branch={_.toUpper(alumni.branch)}
                        position={_.startCase(alumni.position)}
                        company={alumni.companyName}
                        imageSrc={alumni.profilePicURL}
                      />
                    </div>
                  ))
                )}
                

            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AlumniListing;
