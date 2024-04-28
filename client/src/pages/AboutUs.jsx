import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import TeamCard from "../components/Cards/TeamCard";
import Image1 from "../assets/pages/teams/kshitiz.jpg";
import Image2 from "../assets/pages/teams/aditya.jpg";
import Image3 from "../assets/pages/teams/priyal.jpg";
import Image4 from "../assets/pages/teams/sarthak.jpg";
// import TeamTooltip from '../components/animations/TeamTooltip';
// import TextGeneration from '../components/animations/TextRelated/TextGeneration';
import { Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="mx-24 mt-28 mb-24">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <TeamCard
              Image={Image2}
              name={"Aditya Sethiya"}
              data2={"Frontend Developer"}
              data3={"Bhilwara, Rajasthan"}
              linkLinkedin={
                "https://in.linkedin.com/in/aditya-sethiya-073b6b231"
              }
              linkInsta={"https://www.instagram.com/adityasethiya21/"}
              linkX={"https://twitter.com/"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamCard
              Image={Image1}
              name={"Kshitiz Sachan"}
              data2={"FullStack Developer"}
              data3={"Kanpur, Uttar Pradesh"}
              linkLinkedin={"https://in.linkedin.com/in/kshitiz-sachan422"}
              linkInsta={"https://www.instagram.com/kshitizsachan77/"}
              linkX={"https://twitter.com/"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamCard
              Image={Image3}
              name={"Priyal Ingle"}
              data2={"Backend Developer"}
              data3={"Navi Mumbai, Maharashtra"}
              linkLinkedin={"https://in.linkedin.com/in/priyal-ingle-170404290"}
              linkInsta={"https://www.instagram.com/_priyal_ingle_/"}
              linkX={"https://twitter.com/"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamCard
              Image={Image4}
              name={"Sarthak Jain"}
              data2={"Frontend Developer"}
              data3={"Gwalior, Madhya Pradesh"}
              linkLinkedin={
                "https://in.linkedin.com/in/sarthakjain-coder-developer"
              }
              linkInsta={"https://www.instagram.com/sarthak__meh/"}
              linkX={"https://twitter.com/"}
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
