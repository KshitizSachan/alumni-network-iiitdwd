import React, { useState, useEffect } from "react";
import NewsUpdateCard from "../../components/AdminPanel/NewsUpdateCard";
import { toast } from "react-toastify";
import { alumniEps } from "../../utils/AdminPanel/endpoints";
import { fetcherGet } from "../../utils/axiosAPI";
import { Stack, Typography, Button, Box } from "@mui/material";
import NewsEditDialog from "../../components/AdminPanel/Dialogs/NewsEditDialog";

const NewsHandle = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const getAllNews = async () => {
    setLoading(true);
    const url = alumniEps?.news?.getAll;
    try {
      const res = await fetcherGet(url);
      setAllNews(res);
    } catch (err) {
      toast.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : allNews?.length === 0 ? (
        <h3>No News Added</h3>
      ) : (
        <Box sx={{ width: "100%", padding: "1.5rem" }}>
            <Stack spacing={3}>

                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Typography variant="h4">News</Typography>
                    <Button variant="outlined" color="secondary" onClick={() => setOpenAddDialog(true)}>
                        Add News
                    </Button>
                </Stack>
                <Stack spacing={3}>
                    {allNews?.map((item) => (
                    <NewsUpdateCard
                        key={item.newsID}
                        id={item.newsID}
                        title={item.title}
                        description={item.description}
                        tags={item.tags}
                        link={item.link}
                        getAllNews={getAllNews}
                    />
                    ))}
                </Stack>
            </Stack>
        </Box>
      )}
      {openAddDialog && (
        <NewsEditDialog isOpen={openAddDialog} onClose={() => setOpenAddDialog(false)} type={"add"} refreshData={getAllNews} />
      )}
    </>
  );
};

export default NewsHandle;
