import React from "react";
import "./Photos.css"

export default function Photos(props) {
    const maxResults = 6;

    if (props.photos) {
        return (
            <div className="Photos">
                <section>
                    <div className="d-grid photosGrid">
                        <div className="row">
                            {props.photos.slice(0, maxResults).map(function(photo, index){
                                return (
                                    <div className="col-sm-4" key={index}>
                                        <a href={photo.src.original} target="_blank" rel="noreferrer"><img src={photo.src.landscape} alt={photo.alt} title={photo.alt} className="img-fluid"/></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return null;
    }
}