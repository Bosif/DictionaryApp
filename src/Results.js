import React from "react";
import Meaning from "./Meaning";
import './Results.css'

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            <section>
            <div className="container mb-5">
                    <h2>{props.results.word}</h2>
                    <p className="phonetic">
                    [{props.results.phonetic}']
                    </p>
                <hr/>
            </div>
            </section>

            {props.results.meanings.map(function(meaning, index) {
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
                )
            })}
        </div>
    );
} else {
    return null;
}
}