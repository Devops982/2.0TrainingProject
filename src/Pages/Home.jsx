import React from "react";
import AxiosRequest from "../Api/AxiosRequest";
import AxiosRequestPhoto from "../Api/AxiosRequestPhoto";
import Pincode from "../Api/Pincode";
import PincodeSearch from "../Api/PincodeSearch";
import Welcome from "../Components/Layout/Welcome";

const Home = () => {
  return (
    <>
      <h1>This is Home Page</h1>
      {/* <Pincode />
      <PincodeSearch /> */}
      <Welcome />
      {/* <AxiosRequest/> */}
      {/* <AxiosRequestPhoto/> */}
    </>
  );
};

export default Home;
