import React, { useEffect, useState } from "react";
import axios from "axios";

const Pincode = () => {
  const [postOfficeData, setPostOfficeData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.postalpincode.in/pincode/570001")
      .then((response) => {
        console.log(response);
        // Check if the response contains data and has a valid structure
        if (
          Array.isArray(response.data) &&
          response.data.length > 0 &&
          Array.isArray(response.data[0].PostOffice) &&
          response.data[0].PostOffice.length > 0
        ) {
          // Access the "PostOffice" array
          const postOfficeArray = response.data[0].PostOffice;

          // Set the post office data in the state
          setPostOfficeData(postOfficeArray);
        } else {
          setError(new Error("No data found in the response."));
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="ml-96">
      <h2>List of Post Offices:</h2>
      <ul>
        {postOfficeData.map((office, index) => (
          <li key={index}>
            <strong>Name:</strong> {office.Name}
            <br />
            <strong>Branch Type:</strong> {office.BranchType}
            <br />
            {/* Add more fields here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pincode;
