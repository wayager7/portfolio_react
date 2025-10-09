import React from "react";
import Window from './window.jsx'
import './projets.scss';



const Projets = () => {
    return (
        <div className="projets">
            <Window nom="Projets" id="projets" contenu={<h2>Choose a project</h2>}/>
            <Window nom="Projet_description" id="PD"/>
            <Window nom="Pictures" id="Pictures"/>
        </div>
    );
};

export default Projets;
