import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import WikiSearch from "./components/wikiSearch/WikiSearch";
import Dropdown from "./components/dropdown/Dropdown";
import Translate from "./components/translate/Translate";
import Router from "./components/router/Router";
import Header from "./components/header/Header";

const accordionItems = [
    {
        title: "name",
        content: "Dharmendra"
    },
    {
        title: "age",
        content: "31"
    },
    {
        title: "job",
        content: "engineer"
    }
];

const dropdownOptions = [
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "The color red",
        value: "red"
    },
    {
        label: "The shade for blue",
        value: "blue"
    }
];

const App = () => {
    const [selected, setSelected] = useState(dropdownOptions[0]);
    return (
        <div className="app">
            <Header />
            <Router path="/">
                <Accordion items={accordionItems}/>
            </Router>
            <Router path="/search">
                <WikiSearch />
            </Router>
            <Router path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={dropdownOptions}
                />
            </Router>
            <Router path="/translate">
                <Translate />
            </Router>
        </div>
    )
};

export default App;
