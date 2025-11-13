import React , { useState }  from "react";
import Window from './window.jsx'
import './style/projets.scss';
import Travaux from "./contents/travaux.jsx";
import ProjetsList from "./contents/pr_projets.jsx";
import Details from "./contents/pr_details.jsx";
import Pirctures from "./contents/pr_pictures.jsx";



const Projets = () => {
    let prID = 1;
    // let Z_des_phy = 3; // Z de description (suite de phybonacchi mdr)
    // let Z_pic_phy = 2

    return (
        <>
            <div className="projets">
                <Window nom="Projets" id="projets" contenu={<ProjetsList />}  />
                <Window nom="Projet_description" id="PD" contenu={<Details prID={prID} />}/>
                <Window nom="Pictures" id="Pictures" contenu={<Pirctures prID={prID} />} />
            </div>
            {/* <Travaux /> */}
        </>
    );
};

export default Projets;
