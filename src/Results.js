import React from "react";
import Meaning from "./Meaning";
import './Results.css'

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            <section>
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
                <hr/>
            </div>
            {props.results.meanings.map(function(meaning, index) {
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
                )
            })}
         </section>
        </div>
    );
} else {
    return null;
}
}