import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosRequestPhoto = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      //   alert(response);
      console.log(response);
      setuserData(response.data);
    });
  }, []);

  return (
    <div className="text-center mt-9">
      {userData.map((data) => {
        return (
          <>
            <div>{data.title}</div>
            <div><img src={data.url} className="h-6"/></div>
          </>
        );
      })}
    </div>
  );
};

export default AxiosRequestPhoto;
