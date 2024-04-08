import Navbar from '../template/Navbar'
import Footer from '../template/Footer'
import Company from '../components/HomeCompany';
import {useRecoilValue} from "recoil";
import {userAtom} from "../store/atoms/User";
import {useEffect} from "react";
const HomePage =() => {
  const user= useRecoilValue(userAtom);

  useEffect(() => {
    console.log('User', user);
  }, [user]);
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
