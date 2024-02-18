import useSWR from 'swr';
import {get_fetcher} from '../utils/Fetcher'
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import { NewsCard } from '../components/Cards';

const NewsHub =() => {
    const {data, isLoading} = useSWR("http://localhost:5000/news/getAll", get_fetcher)
    console.log(data)
    return (
        <>
            <Navbar/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                data?.map((news, index) => (
                    <div key={index}>
                        <div>Title: {news.title}</div>
                        <div>Description: {news.description}</div>
                    </div>
                ))
            )}
           
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />



            <Footer/>
        </>
    );
}

export default NewsHub;
