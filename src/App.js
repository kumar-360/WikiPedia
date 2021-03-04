import React from "react";
//import Accordion from "./components/Accordion";
import Search from "./components/Search";
//import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is React",
//     content: "It is a frontend framework.",
//   },
//   {
//     title: "How are you?",
//     content: "Fine",
//   },
// ];

// const options = [
//   {
//     label: "Red",
//     value: "red",
//   },
//   {
//     label: "Blue",
//     value: "blue",
//   },
//   {
//     label: "Green",
//     value: "green",
//   },
// ];

const App = () => {
  return (
    <div>
    {/* <label>Select Color</label> */}
    <Search />
  </div>
  );
  
};

export default App;
