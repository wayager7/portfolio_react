import React , { useState }  from "react";
import Window from './window.jsx'
import './style/gallery.scss';
import Travaux from "./contents/travaux.jsx";
import GalleryContent from "./contents/ga_gallery.jsx"


const Gallery = () => {
    const [gaID, setGaID] = useState(null);
    const [zGal, setZGal] = useState(1);
    const [zRes, setZRes] = useState(1);
    return (
        <>
        <div className="gallery">
            <Window 
                nom="Gallery" 
                id="gallery" 
                contenu={<GalleryContent gaID={gaID} />}
                onClick={() => setZGal(zRes + 1)}
                style={{ zIndex: zGal }}

            />
            {/* <Window 
                nom="result" 
                id="result" 
                contenu={<p>Voici quelques images de mes projets :</p>}
                onClick={() => setZRes(zGal + 1)}
                style={{ zIndex: zRes }}

            /> */}
        </div>
        <Travaux />
        </>
    );
};

export default Gallery;
