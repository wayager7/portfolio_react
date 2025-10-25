import React from "react";
import './backup.scss';
import ico_wf from '../../assets/accueil/ico_wf.png';
import ico_projets from '../../assets/accueil/ico_pro.png';
import ico_gallery from '../../assets/accueil/ico_gal.png';

const Backup = ({onWaldiClick, onProjetsClick, onGalleryClick}) => {
    return (
        <div className="backup">
            <h2>Select Level</h2>
            <div className="file" onClick={onWaldiClick}>
                {/* <div className="icone"></div> */}
                <img src={ico_wf} className="icone" alt="" />
                <h3>Waldi_fiaga</h3>
            </div>
            <div className="file" onClick={onProjetsClick}>
                {/* <div className="icone"></div> */}
                <img src={ico_projets} className="icone" alt="" />
                <h3>Projets</h3>
            </div>
            <div className="file" onClick={onGalleryClick}>
                {/* <div className="icone"></div> */}
                <img src={ico_gallery} className="icone" alt="" />
                <h3>Gallery</h3>
            </div>
        </div>
    );
};

export default Backup;
