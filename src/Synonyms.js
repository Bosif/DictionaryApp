import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                <div className="synonyms-header">SYNONYMS:</div>
                {props.synonyms.map(function (synonym, index) {
                    return <li key={index}>{synonym}</li>
                })}
            </ul>
            
        );
    } else {
        return null;
    }
}
