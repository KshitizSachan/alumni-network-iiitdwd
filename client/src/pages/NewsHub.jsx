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
                        ]<NewsCard title={news.title} description={news.description} venue={news.tags[0]} event={news.tags[1]} club={news.tags[2]} link={news.link}   />
                    </div>
                ))
            )}


            <Footer/>
        </>
    );
}

export default NewsHub;
