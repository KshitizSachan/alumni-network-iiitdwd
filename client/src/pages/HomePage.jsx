import Navbar from '../template/Navbar'
import Footer from '../template/Footer'
import StaticHomeLaptop from '../components/StaticHomeLaptop';
import StaticHomeMobile from '../components/StaticHomeMobile';
import './HomePage.css'; 
const HomePage =() => {
  
    return (
        <>
            <Navbar />
            <p className='mt-16'></p>
            <div className="home-content">
              <StaticHomeLaptop />
              <StaticHomeMobile />
            </div>
            <Footer />
        </>
    );
}


export default HomePage;
