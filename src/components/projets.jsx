import React from "react";
import Window from './window.jsx'
import './style/projets.scss';
import Travaux from "./contents/travaux.jsx";
import ProjetsList from "./contents/pr_projets.jsx";



const Projets = () => {
    return (
        <>
        <div className="projets">
            <Window nom="Projets" id="projets" contenu={<ProjetsList />}/>
            <Window nom="Projet_description" id="PD"/>
            <Window nom="Pictures" id="Pictures"/>
        </div>
        <Travaux />
        </>
    );
};

export default Projets;
