import React from "react";

const Stringliterals = () => {
  const fname = "Parthiban";
  const lname = "P";
  return (
    <div>
      Stringliterals
      <h1 className="text-6xl text-blue-500 font-extrabold">
        {" "}
        My Name is {fname}
        {lname}
      </h1>
      <h1>{`My name is ${fname} ${lname}`}</h1>
    </div>
  );
};

export default Stringliterals;
