import useSWR from 'swr';
import React, { useEffect, useState } from "react";
import {get_fetcher} from '../utils/Fetcher'
// import { Grid } from "@mui/material";
import { JobsFilterButton } from "../components/jobsFilterButton";

import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import { NewsCard } from '../components/Cards';
import {useRecoilValue} from "recoil";
import {userAtom} from "../store/atoms/User";
import {Typography} from "@mui/material";

const NewsHub =() => {
    const {data, isLoading} = useSWR("http://localhost:5000/news/getall", get_fetcher)
  const user= useRecoilValue(userAtom);

  useEffect(() => {
    console.log('User', user);
  }, [user]);

    useEffect(() =>{
        if(data){
            console.log('Data: ', data);
        }
    }, [isLoading, data])
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
      scholarships:false,
      event: false,
      ecell: false,
      cultural:false,
      competition:false
    });
  
    useEffect(() => {
      if (!data) return;
  
      let filteredJobs = data.filter((news) => {
        if (filters.scholarships && !news.tags.includes("Scholarships")) return false;
        if (filters.event && !news.tags.includes("Event")) return false;
        if (filters.ecell && !news.tags.includes("E-Cell")) return false;
        if (filters.cultural && !news.tags.includes("Cultural")) return false;
        if (filters.competition && !news.tags.includes("Competition")) return false;
        return true;
      });
  
      setFilteredData(filteredJobs);
    }, [data, filters]);
  
    const handleFilterClick = (filterName) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [filterName]: !prevFilters[filterName],
        }));
    };
  
    useEffect(() => {
      console.log(filters);
    }, [filters]);

   
    return (
        <>
          <Navbar/>
          <p className='mt-32'></p>
          {(user.basic.rank === 3) && (
            <Typography className='flex justify-center' style={{marginBottom: '1rem'}}> Want to unblur the hidden sections ? Login using iiitdwd college mail</Typography>
          )}
          {(user.basic.rank === -1) && (
            <Typography className='flex justify-center' style={{marginBottom: '1rem'}}> Login to get more access and unblur hidden items.</Typography>
          )}
            <div className="bg-white flex justify-center">
              <div className="flex font-bold items-center justify-center">
                <div className='items-center'>
                  <img
                    src="/filter_icon.svg"
                    alt="filter-icon"
                    className="mt-1.5 mr-1 h-6"
                  />
                </div>
                <div className="mr-2 text-2xl items-center">Filter</div>
              </div>

              <div onClick={() => handleFilterClick("ecell")}>
                <JobsFilterButton name="E-Cell" used={filters.ecell} />
              </div>

              <div onClick={() => handleFilterClick("event")} className="">
                <JobsFilterButton name="Event" used={filters.event} />
              </div>

              <div
                onClick={() => handleFilterClick("cultural")}
                className="">
                <JobsFilterButton name="Cultural" used={filters.cultural}/>
              </div>

              <div
                onClick={() => handleFilterClick("competition")}
                className="">
                    <JobsFilterButton name="Competition" used={filters.competition} />
              </div>
                  
              <div 
                onClick={() => handleFilterClick("scholarships")}
                className="">
                    <JobsFilterButton name="Scholarships" used={filters.scholarships} />
              </div>
            </div>
            <div className=''>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredData?.map((news, index) => (
                    <div  key={index} className='mb-14'>
                        <NewsCard rank={user?.basic?.isLoggedIn ? user?.basic?.rank : -1} title={news.title} tags={news.tags} tag1={news.tags[0]} tag2={news.tags[1]} tag3={news.tags[2]} description={news.description} />
                    </div>
                    ))
                )}
            </div>
            {/* </Grid> */}
            <Footer/>
        </>
    );
}

export default NewsHub;
