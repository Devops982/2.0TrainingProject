import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosRequest = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
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
            <div>{data.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default AxiosRequest;
