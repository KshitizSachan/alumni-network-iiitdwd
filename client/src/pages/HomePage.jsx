import Navbar from '../template/Navbar'
import Footer from '../template/Footer'
import StaticHome from '../components/StaticHome';
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
            <p className='mt-32'></p>
            <StaticHome />
            <Footer />
        </>
    );
}


export default HomePage;
