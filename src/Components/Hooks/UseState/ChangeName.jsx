import React, { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState("");

  const ChangeName = () => {
    const buttonElement = document.getElementById("Iam");
    if (buttonElement) {
      const buttonText = buttonElement.innerText;
      setName(buttonText);
    }
  };

  const ChangeNameParthiban = () => {
    setName("Parthiban");
  };

  return (
    <>
      <div className="items-center mt-40">
        <div className="flex justify-center font-bold text-2xl">
          <h1>{name}</h1>
        </div>
        <div className="flex justify-center space-x-2">
        <div className="flex justify-center font-bold text-2xl">
          <button
          id="Iam"
            onClick={ChangeName}
            className="bg-green-700 p-3 rounded-xl text-white font-bold"
          >
           I am Viknesh
          </button>
        </div>
        <div className="flex justify-center font-bold text-2xl">
          <button
            onClick={ChangeNameParthiban}
            className="bg-green-700 p-3 rounded-xl text-white font-bold"
          >
            Parthiban
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default ChangeName;
