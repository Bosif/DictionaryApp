import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
 

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)
    let [photos, setPhotos] = useState(null)


    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePhotosResponse(response) {
        console.log(response.data)
        setPhotos(response.data.photos)
    }
    

    function search() {
         //documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey = "c8a5e25887f10t1o4fc6a4fb7b8c3bcf";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let photosApiKey = "c8a5e25887f10t1o4fc6a4fb7b8c3bcf";
        let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`
        axios.get(photosApiUrl).then(handlePhotosResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    } 

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                <form onSubmit={handleSubmit}>
                   <h3>What word do you want to look up?</h3>
                   <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                </form>
                <div className="hint">
                    e.g. flower, solar, yoga
                </div>
                </section>
                <Results results={results}/>
                <Photos photos={photos}/>
            </div>
        )
    } else {
        load();
        return "Loading";
    }

}