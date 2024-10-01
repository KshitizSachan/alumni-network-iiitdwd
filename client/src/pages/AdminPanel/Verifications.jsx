import React from "react";
import { useState, useEffect } from "react";
import { fetcherGet } from "../../utils/axiosAPI";
import VerifyCard from "../../components/AdminPanel/VerifyCard";
const Verifications = () => {
  const [pendingData, setPendingData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetcherGet("/user/getPending");
      setPendingData(res);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {pendingData?.length === 0 ? (
        <strong className=" flex justify-center items-center w-full">No Alumni Approvals Pending.</strong>
      ) : (
        <div className="w-full m-3 flex justify-center">
          {pendingData?.map((item) => (
            <VerifyCard
                key={item.userID}
              name={item.name}
              email={item.email}
              id={item.userID}
              linkedin=""
              refreshData={getData}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Verifications;
