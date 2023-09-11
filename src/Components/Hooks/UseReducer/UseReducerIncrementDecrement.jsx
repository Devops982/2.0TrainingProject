import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const UseReducerIncrementDecrement = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="items-center mt-40">
        <div className="flex justify-center font-bold text-2xl">
          <h1>{state.count}</h1>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="flex justify-center font-bold text-2xl">
            <button
              id="Iam"
              onClick={() => {
                dispatch({ type: "INCREMENT" });
              }}
              className="bg-green-700 p-3 rounded-xl text-white font-bold"
            >
              Click Me to Increase
            </button>
          </div>
          <div className="flex justify-center font-bold text-2xl">
            <button
              onClick={() => {
                dispatch({ type: "DECREMENT" });
              }}
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

export default UseReducerIncrementDecrement;
