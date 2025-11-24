import React, { useState, useEffect, useMemo } from "react";
import fichier from './data/ga_content.json';
import './style/ga_gallery.scss';


function GalleryContent({ gaID}){
    return(
        <div className="all">
            {
                fichier.map ((item) =>(
                    <div className="fichier">
                        <div className="img">
                            {item.type === 2 && (
                                <img src={item.fichier} />
                            )}
                            {item.type === 3||1 && (
                                <img src="/ico.png" alt="" />
                            )}
                        </div>
                        <span>{item.nom}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default GalleryContent;