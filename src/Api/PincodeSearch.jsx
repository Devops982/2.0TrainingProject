import React, { useEffect, useState } from "react";
import axios from "axios";

const PincodeSearch = () => {
  const [pincode, setPincode] = useState("");
  const [postOfficeData, setPostOfficeData] = useState([]);
  const [error, setError] = useState(null);

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = () => {
    // Make the API request with the entered PIN code
    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
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
          setError(null); // Clear any previous errors
        } else {
          setError(new Error("No data found for the entered PIN code."));
          setPostOfficeData([]); // Clear the data
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
        setPostOfficeData([]); // Clear the data
      });
  };

  return (
    <div className="mx-auto mt-10 w-80">
      <h2 className="text-2xl font-semibold mb-4">Pincode Search</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter PIN code"
          value={pincode}
          onChange={handlePincodeChange}
          className="border rounded-md p-2 w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">Error: {error.message}</div>}
      <h2 className="text-xl font-semibold mt-4">List of Post Offices:</h2>
      <ul className="list-disc list-inside">
        {postOfficeData.map((office, index) => (
          <li key={index} className="mt-2">
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

export default PincodeSearch;
