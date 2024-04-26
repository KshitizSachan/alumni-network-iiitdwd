import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import { Grid, TextField, Pagination, Typography } from "@mui/material";
import { JobsFilterButton } from "../components/jobsFilterButton";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { get_fetcher } from "../utils/Fetcher";
import AlumniCard from "../components/Cards/AlumniCard";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/User";
const _ = require("lodash");

const AlumniListing = () => {
  const { data, isLoading } = useSWR(
    "http://localhost:5000/user/getAll",
    get_fetcher
  );
  const user = useRecoilValue(userAtom);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const cardsPerPage = 8;

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
  const [searchQuery, setSearchQuery] = useState("");
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
      if (
        searchQuery &&
        !user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

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

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };

  const getCurrentPageData = (currPage) => {
    if (filteredData?.length < cardsPerPage) {
      setCurrentPageData(filteredData);
    } else {
      const startIndex = (currPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const newPageData = filteredData?.slice(startIndex, endIndex);
      setCurrentPageData(newPageData);
    }
  };

  useEffect(() => {
    if (filteredData) {
      console.log(filteredData);
      setNumOfPages(Math.ceil(filteredData.length / cardsPerPage));
      getCurrentPageData(1);
    }
    setCurrentPage(1);
    // eslint-disable-next-line
  }, [filteredData]);

  useEffect(() => {
    getCurrentPageData(currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <div className="mx-24 pt-14">
        <p style={{ marginTop: "100px" }}></p>
        {user?.basic?.rank === 3 && (
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Typography
              className="flex justify-center"
              style={{ marginBottom: "1rem" }}
            >
              Want to unblur this section? Login using iiitdwd college mail
            </Typography>
          </Grid>
        )}
        {user?.basic?.rank === -1 && (
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Typography
              className="flex justify-center"
              style={{ marginBottom: "1rem" }}
            >
              Login to get more access and unblur hidden items.
            </Typography>
          </Grid>
        )}
        {(user?.basic?.rank === 1 || user?.basic?.rank === 2) && (
          <Grid container>
            <Grid xs={3} className="">
              <div className="bg-white min-h-40 pt-7 pb-7 rounded-md shadow-md hidden md:block">
                <div className="flex justify-center w-full">
                  <TextField
                    label="Search..."
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Grid xs={12} className="flex justify-center mt-4 mb-2">
                  <div className="flex font-bold">
                    <div>
                      <img
                        src="/filter_icon.svg"
                        alt="filter-icon"
                        className="mt-1.5 mr-1 h-6"
                      />
                    </div>
                    <div className="ml-1 text-2xl">Filter</div>
                  </div>
                </Grid>
                <Grid xs={12} className="flex justify-center">
                  <div className="flex">
                    <div onClick={() => handleFilterClick("All")}>
                      <JobsFilterButton name="ALL" used={filters.All} />
                    </div>
                    <div onClick={() => handleFilterClick("CSE")}>
                      <JobsFilterButton name="CSE" used={filters.CSE} />
                    </div>
                    <div onClick={() => handleFilterClick("DSAI")}>
                      <JobsFilterButton name="DSAI" used={filters.DSAI} />
                    </div>
                    <div onClick={() => handleFilterClick("ECE")}>
                      <JobsFilterButton name="ECE" used={filters.ECE} />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className="flex justify-center">
                  <div className="flex">
                    <div
                      onClick={() => handleFilterClick("year2022")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2022 BATCH"
                        used={filters.year2022}
                      />
                    </div>
                    <div
                      onClick={() => handleFilterClick("year2023")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2023 BATCH"
                        used={filters.year2023}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className="flex justify-center">
                  <div className="flex">
                    <div
                      onClick={() => handleFilterClick("year2024")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2024 BATCH"
                        used={filters.year2024}
                      />
                    </div>
                    <div
                      onClick={() => handleFilterClick("year2025")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2025 BATCH"
                        used={filters.year2025}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} className="flex justify-center">
                  <div className="flex">
                    <div
                      onClick={() => handleFilterClick("year2026")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2026 BATCH"
                        used={filters.year2026}
                      />
                    </div>
                    <div
                      onClick={() => handleFilterClick("year2027")}
                      className=""
                    >
                      <JobsFilterButton
                        name="2027 BATCH"
                        used={filters.year2027}
                      />
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid xs={1} className="flex items-center justify-center">
              <div className="h-full bg-greyLine w-0.5"></div>
            </Grid>

            <Grid xs={8} item container spacing={4} direction={"column"}>
              {isLoading ? (
                <p className=" text-primaryPink font-bold font-poppins text-3xl px-6 py-4 ">
                  Loading...
                </p>
              ) : currentPageData?.length === 0 ? (
                <p className=" text-primaryPink font-bold font-poppins text-3xl px-6 py-4 ">
                  {" "}
                  No results found.....
                </p>
              ) : (
                <>
                  {currentPageData?.map((alumni, index) => (
                    <Grid item key={index}>
                      <AlumniCard
                        rank={user?.basic?.rank}
                        name={alumni.name}
                        batch={alumni.batch}
                        branch={_.toUpper(alumni.branch)}
                        position={_.startCase(alumni.position)}
                        company={alumni.companyName}
                        imageSrc={alumni.profilePicURL}
                        userId={alumni.userID}
                      />
                    </Grid>
                  ))}
                  <Grid item>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Pagination
                        count={numOfPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        sx={{
                          "& .MuiPaginationItem-root": {
                            color: "#FA005E",
                            borderColor: "#FA005E",
                            backgroundColor: "white",
                          },
                        }}
                        size="large"
                        //color="secondary"
                        //hidePrevButton
                        //hideNextButton
                      />
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AlumniListing;
