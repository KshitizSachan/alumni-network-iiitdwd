import React from "react";
import VerifyCard from "../../components/AdminPanel/VerifyCard";
import JobUpdateCard from "../../components/AdminPanel/JobUpdateCard";
import NewsUpdateCard from "../../components/AdminPanel/NewsUpdateCard";

const AdminPanel = () => {
  return (
    <div className="p-5">
      <VerifyCard
        id={5}
        name={"Aditya Sethiya"}
        email={"thegreat.maheshwari@gmail.com"}
        linkedin={"https://blablaLinkedIn"}
      />
      <div className="mt-5"></div>
      <JobUpdateCard
        id={6}
        jobPosition="SDE"
        category={1}
        company={"IngLimited"}
        location="Navi Mumbai"
        posted="01-10-2024"
        startDate="01-01-2025"
        stipend="1,00,000"
        postedBy="Priyal"
        batch={[2025]}
        jobURL={"blabla.com/blabla"}
      />
      <div className="mt-5"></div>
      <NewsUpdateCard
        id={7}
        title="Temp news title"
        description="Temp description"
        link="blabla.com"
        tags={["tag1", "tag2"]}
      />
    </div>
  );
};

export default AdminPanel;
