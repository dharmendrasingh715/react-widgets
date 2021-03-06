import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown/Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    { 
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    const [debouncedText, setDebouncedText] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        type="text"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown 
                label={"Select a Language"}
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={debouncedText}/>
        </div>
    );
}

export default Translate;