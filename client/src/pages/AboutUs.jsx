import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import TeamCard from "../components/Cards/TeamCard";
import Image1 from "../assets/pages/teams/kshitiz.jpg";
import Image2 from "../assets/pages/teams/aditya.jpg";
import Image3 from "../assets/pages/teams/priyal.jpg";
import Image4 from "../assets/pages/teams/sarthak.jpg";
// import TeamTooltip from '../components/animations/TeamTooltip';
// import TextGeneration from '../components/animations/TextRelated/TextGeneration';
import {Grid, Typography} from "@mui/material";
import AboutUsCard from '../components/ui/AboutUsProfile';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Grid justifyContent={'center'} container spacing={3} sx={{marginTop: '5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Grid item xs={12} sm={7} >
        <Typography variant={'h5'} color={'primary'}>Our Mission</Typography>
        <Typography >
          At IIIT Dharwad Alumni Network, our mission is to bridge the gap between current students
          and our esteemed alumni. We believe in the power of community and the immense potential
          that comes from fostering strong connections within our college network.
        </Typography>
        </Grid>

        <Grid item xs={12} sm={7} >
          <Typography variant={'h5'} color={'primary'}>Who We Are</Typography>
          <Typography >
            We are a dedicated platform designed to connect the current batch of students with alumni.
            Our community comprises individuals from diverse fields who are eager to share their experiences,
            insights, and opportunities with students who are ready to embark on their professional journeys.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={7} >
          <Typography variant={'h5'} color={'primary'}>What We Offer</Typography>
          <Typography variant={'h6'} fontWeight={600} color={'secondary'}>Alumni Connections</Typography>
          <Typography >
            Our platform enables students to find and connect with alumni who are working in their field of interest. This connection provides invaluable mentorship, guidance, and networking opportunities.
          </Typography>

          <Typography sx={{marginTop: '1rem'}} variant={'h6'} fontWeight={600} color={'secondary'}>Internship and Job Opportunities</Typography>
          <Typography >
            Alumni and other members of our community regularly post internship and job opportunities. Students can easily browse and apply for these positions, gaining access to exclusive openings that might not be available elsewhere.
          </Typography>

          <Typography sx={{marginTop: '1rem'}} variant={'h6'} fontWeight={600} color={'secondary'}>Scholarships and Financial Aid</Typography>
          <Typography >
            Stay informed about various scholarships and financial aid options available. Our platform curates and updates information about scholarships, helping students find the financial support they need to pursue their education and career goals.
          </Typography>

          <Typography sx={{marginTop: '1rem'}} variant={'h6'} fontWeight={600} color={'secondary'}>News and Events</Typography>
          <Typography >
            Keep up-to-date with the latest news related to local fests, events, and other happenings within the college community. Whether it's a career fair, a guest lecture, or a cultural fest, you’ll find all the information you need right here.
          </Typography>

        </Grid>

        <Grid item xs={12} sm={7} sx={{marginBottom: '2rem'}}>
          <Typography variant={'h5'} color={'primary'}>Join Us</Typography>
          <Typography >
            Become a part of the [College Name] Alumni Network today! Whether you are a current student seeking guidance or an alumnus looking to give back to the community, our platform offers something for everyone. Together, we can build a stronger, more connected future.
          </Typography>
        </Grid>


        <Grid item xs={12} sm={10} sx={{marginBottom: '5rem'}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2rem'}}>
              <Typography variant={'h4'}  color={'secondary'}>Meet The Team</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AboutUsCard image={Image2} name={'Aditya Sethiya'} title={'Frontend Dev'} link1={'https://in.linkedin.com/in/aditya-sethiya-073b6b231'} link2={'https://www.instagram.com/adityasethiya21/'} link3={'https://twitter.com/'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AboutUsCard image={Image1} name={'Kshitiz Sachan'} title={'Lead - Full Stack Dev'} link1={'https://in.linkedin.com/in/kshitiz-sachan422'} link2={'https://www.instagram.com/kshitizsachan77/'} link3={'https://twitter.com/'} />
            </Grid>
              <Grid item xs={12} sm={6} md={3}>
            <AboutUsCard image={Image3} name={'Priyal Ingle'} title={'Full Stack Dev'} link1={'https://in.linkedin.com/in/priyal-ingle-170404290'} link2={'https://www.instagram.com/_priyal_ingle_/'} link3={'https://twitter.com/'} />
              </Grid>
                <Grid item xs={12} sm={6} md={3}>
            <AboutUsCard image={Image4} name={'Sarthak Jain'} title={'Frontend Dev'} link1={'https://in.linkedin.com/in/sarthakjain-coder-developer'} link2={'https://www.instagram.com/sarthak__meh/'} link3={'https://twitter.com/'} />
                </Grid>
          </Grid>
        </Grid>
      </Grid>




      <Footer />
    </>
  );
};

export default AboutUs;
