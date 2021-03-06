import React, { useState, useEffect } from "react";
import TranslateAPI from "../../util/api";

const Convert = ({language, text}) => {
    const [result, setResult] = useState("");
    useEffect(() => {
        const translate = async () => {
            const {data} = await TranslateAPI.post('https://translation.googleapis.com/language/translate/v2', {}, { 
                params: {
                    q: text,
                    target: language.value               
                }
            });
            console.log(data);
            setResult(data?.data?.translations[0]?.translatedText);
        }

        translate();
    }, [language, text]);

    return (
        <div>{result}</div>
    );
}

export default Convert;