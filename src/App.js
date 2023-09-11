import React from "react";

import Stringliterals from "./Components/ReactBasics/Stringliterals";
import JavascriptMaths from "./Components/JavascriptMaths";
import GarageParent from "./Components/Props/GarageParent";
import GarageParentVariable from "./Components/Props/PropsVariableName/GarageParentVariable";
import GarageParentObjectDestruction from "./Components/Props/ObjectDestruction/GarageParentObjectDestruction";
import BookList from "./Components/BookList/BookList";
import BookListArray from "./Components/BookList/ArrayMapBook/BookListArray";
import BookListArrayIndex from "./Components/BookList/ArrayMapIndex/BookListArrayIndex";
import Styling from "./Components/CSSStyling/Styling";
import UseStateHook from "./Components/Hooks/UseState/UseStateHook";
import ChangeName from "./Components/Hooks/UseState/ChangeName";
import IncrementDecrement from "./Components/Hooks/UseState/IncrementDecrement";
import UseReducerHook from "./Components/Hooks/UseReducer/UseReducerHook";
import UseReducerIncrementDecrement from "./Components/Hooks/UseReducer/UseReducerIncrementDecrement";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";
import AppRouting from "./routes/AppRouting";
import AdminRoutes from "./routes/AdminRoutes";
import Navigation from "./Components/Layout/Navigation";
import Footer from "./Components/Layout/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <AppRouting />
      <Footer />
      {/* <Navigation/>
    <Welcome/> */}
      {/* <UseReducerIncrementDecrement/> */}
      {/* <UseReducerHook/> */}
      {/* <IncrementDecrement/> */}
      {/* <ChangeName/> */}
      {/* <UseStateHook/> */}
      {/* <Styling/> */}
      {/* <BookListArrayIndex/> */}
      {/* <BookList/> */}
      {/* <BookListArray/> */}
      {/* <BookListArray/> */}
      {/* <GarageParent/>
    <GarageParentVariable/>
    <GarageParentObjectDestruction/> */}
      {/* <JavascriptMaths/> */}
      {/* <Stringliterals/> */}
      {/* <Footer/> */}
    </>
  );
};

export default App;
