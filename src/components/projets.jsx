import React from "react";
import Window from './window.jsx'
import './style/projets.scss';
import Travaux from "./contents/travaux.jsx";



const Projets = () => {
    return (
        <>
        <div className="projets">
            <Window nom="Projets" id="projets" contenu={<h2>Choose a project</h2>}/>
            <Window nom="Projet_description" id="PD"/>
            <Window nom="Pictures" id="Pictures"/>
        </div>
        <Travaux />
        </>
    );
};

export default Projets;
