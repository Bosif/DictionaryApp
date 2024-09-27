import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
 

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);


    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event){
        event.preventDefault();
        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey = "c8a5e25887f10t1o4fc6a4fb7b8c3bcf";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}