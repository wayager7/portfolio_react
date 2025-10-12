import React from "react";
import Window from './window.jsx'
import './gallery.scss';

const Gallery = () => {
    return (
        <div className="gallery">
            <Window nom="Gallery" id="gallery" contenu={<h2>Welcome to the Gallery</h2>}/>
            <Window nom="result" id="result" contenu={<p>Voici quelques images de mes projets :</p>}/>
        </div>
    );
};

export default Gallery;
