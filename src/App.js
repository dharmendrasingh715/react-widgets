import React from "react";
// import Accordion from "./components/accordion/Accordion";
import "./App.css";
import WikiSearch from "./components/wikiSearch/WikiSearch";

// const accordionItems = [
//     {
//         title: "name",
//         content: "Dharmendra"
//     },
//     {
//         title: "age",
//         content: "31"
//     },
//     {
//         title: "job",
//         content: "engineer"
//     }
// ];

const App = () => {
    return (
        <div className="app">
            {/* <Accordion items={accordionItems}/> */}
            <WikiSearch />
        </div>
    )
};

export default App;