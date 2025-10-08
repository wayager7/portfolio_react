import React from "react";
import './backup.scss';

const Backup = ({onWaldiClick, onProjetsClick, onGalleryClick}) => {
    return (
        <div className="backup">
            <h2>Select Level</h2>
            <div className="file" onClick={onWaldiClick}>
                <div className="icone"></div>
                <h3>Waldi_fiaga</h3>
            </div>
            <div className="file" onClick={onProjetsClick}>
                <div className="icone"></div>
                <h3>Projets</h3>
            </div>
            <div className="file" onClick={onGalleryClick}>
                <div className="icone"></div>
                <h3>Gallery</h3>
            </div>
        </div>
    );
};

export default Backup;
