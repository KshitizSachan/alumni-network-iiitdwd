import Navbar from '../template/Navbar';
import Footer from '../template/Footer';
import TeamCard from '../components/Cards/TeamCard';
import Image from "../assets/pages/teams/kshitiz.jpg";
// import TeamTooltip from '../components/animations/TeamTooltip';
// import TextGeneration from '../components/animations/TextRelated/TextGeneration';
import {Grid} from '@mui/material';

const AboutUs =() => {
    return (
        <>
          <Navbar/>
          <div className="mx-24 pt-14">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
            <TeamCard Image={Image} name={'Kshitiz Sachan'} data2={'FullStack Developer'} data3={'Kanpur, Uttar Pradesh'} linkLinkedin={'https://in.linkedin.com/'} linkInsta={'https://www.google.co.in/'} linkX={'https://www.google.co.in/'} />
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <TeamCard Image={Image} name={'Kshitiz Sachan'} data2={'FullStack Developer'} data3={'Kanpur, Uttar Pradesh'} linkLinkedin={'https://in.linkedin.com/'} linkInsta={'https://www.google.co.in/'} linkX={'https://www.google.co.in/'} />
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <TeamCard Image={Image} name={'Kshitiz Sachan'} data2={'FullStack Developer'} data3={'Kanpur, Uttar Pradesh'} linkLinkedin={'https://in.linkedin.com/'} linkInsta={'https://www.google.co.in/'} linkX={'https://www.google.co.in/'} />
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <TeamCard Image={Image} name={'Kshitiz Sachan'} data2={'FullStack Developer'} data3={'Kanpur, Uttar Pradesh'} linkLinkedin={'https://in.linkedin.com/'} linkInsta={'https://www.google.co.in/'} linkX={'https://www.google.co.in/'} />
            </Grid> 
          </Grid>
          </div>
          <Footer/>
        </>
    );
}

export default AboutUs;
