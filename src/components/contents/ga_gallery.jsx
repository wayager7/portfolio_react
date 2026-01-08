import React, { useState, useEffect, useMemo } from "react";
import fichier from './data/ga_content.json';
import './style/ga_gallery.scss';


function GalleryContent({ gaID}){
    const [selectedID, setSelectedID] = useState(null);

    const handleFileClick = (id) => {
        setSelectedID(id);
        gaID(id);  // appelle la fonction parent
    };

    return(
        <div className="ga_gallery">
            <div className="folders">
            </div>
            <div className="all">
                <div className="searchbar"></div>
                {
                    fichier.map ((item) =>(
                        <div 
                            className={`fichier ${selectedID === item.id ? 'actif' : ''}`}
                            onClick={() => handleFileClick(item.id)} 
                            key={item.id}
                        >
                            <div className="img">
                                {item.type === 2 && (
                                    <img src={item.fichier} />
                                )}
                                {item.type === 3 || item.type === 1 && (
                                    <img src="/ico.png" alt="" />
                                )}
                            </div>
                            <span>{item.nom}</span>
                        </div>
                    ))
                }
            </div>
            <div className="details_selected">
                {selectedID && (
                    <>
                    <h3>{fichier.find(item => item.id === selectedID)?.nom}</h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default GalleryContent;