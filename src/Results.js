import React from "react";
import Meaning from "./Meaning";
import './Results.css'

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <h2>{props.results.word}</h2>
                    <p className="phonetic">
                    [{props.results.phonetic}']
                    </p>
                    </div>
                    <div className="col-6">
                        <h2>"image"</h2>
                    </div>
                </div>
                <hr />
            </div>
            {props.results.meanings.map(function(meaning, index) {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
         
        </div>
    );
} else {
    return null;
}
}