import React from "react";
import Window from './window.jsx'
import './style/gallery.scss';
import Travaux from "./contents/travaux.jsx";


const Gallery = () => {
    return (
        <>
        <div className="gallery">
            <Window nom="Gallery" id="gallery" contenu={<h2>Welcome to the Gallery</h2>}/>
            <Window nom="result" id="result" contenu={<p>Voici quelques images de mes projets :</p>}/>
        </div>
        <Travaux />
        </>
    );
};

export default Gallery;
