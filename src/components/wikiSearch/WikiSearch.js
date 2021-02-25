import React, { useState, useEffect } from "react";
import axios from "axios";

const WikiSearch = () => {
    const [searchTerm, updateSearch] = useState("programming");
    const [debouncedTerm, updateDebouncedTerm] = useState(searchTerm);
    const [results, updateResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            updateDebouncedTerm(searchTerm)
        });

        return () => {
            clearTimeout(timerId);
        }
    }, [searchTerm]);

    useEffect( () => {
        const search = async ()=>{
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm
                }
            });
            updateResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const onInputChange = (term) => {
        updateSearch(term);
    }

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Wikipedia</label>
                    <div className="ui input">
                        <input type="text" value={searchTerm} placeholder="Search..." onChange={(e) => onInputChange(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default WikiSearch;