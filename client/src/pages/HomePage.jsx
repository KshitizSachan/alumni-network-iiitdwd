import Navbar from '../template/Navbar'
import Footer from '../template/Footer'
import Company from '../components/HomeCompany';
const HomePage =() => {
    return (
        <>
            <Navbar />
            <p className='text-2xl'>Hello from HomePage</p>
            <Company />
            <Footer />
        </>
    );
}


export default HomePage;
