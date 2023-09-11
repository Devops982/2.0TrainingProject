import React, { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const IncrementNumber = () => {
    setCount(count + 1);
  };

  const DecrementNumber = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="items-center mt-40">
        <div className="flex justify-center font-bold text-2xl">
          <h1>{count}</h1>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="flex justify-center font-bold text-2xl">
            <button
              id="Iam"
              onClick={IncrementNumber}
              className="bg-green-700 p-3 rounded-xl text-white font-bold"
            >
              Click Me to Increase
            </button>
          </div>
          <div className="flex justify-center font-bold text-2xl">
            <button
              onClick={DecrementNumber}
              className="bg-green-700 p-3 rounded-xl text-white font-bold"
            >
              Click Me to decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncrementDecrement;
