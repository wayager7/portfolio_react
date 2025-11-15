import React , { useState }  from "react";
import Window from './window.jsx'
import './style/projets.scss';
import Travaux from "./contents/travaux.jsx";
import ProjetsList from "./contents/pr_projets.jsx";
import Details from "./contents/pr_details.jsx";
import Pirctures from "./contents/pr_pictures.jsx";



const Projets = () => {
    const [prID, setPrID] = useState(0);
    const [zDes, setZDes] = useState(1);
    const [zPic, setZPic] = useState(1);

    return (
        <>
            <div className="projets" >
                <Window nom="Projets" id="projets" contenu={<ProjetsList />} />
                <Window 
                    nom="Projet_description" 
                    id="PD" 
                    contenu={<Details prID={prID} />}  
                    onClick={() => setZDes(zDes + zPic)}
                    style={{ position: 'fixes', zIndex: zDes }}
                />
                <Window 
                    nom="Pictures" 
                    id="Pictures" 
                    contenu={<Pirctures prID={prID} />} 
                    onClick={() => setZPic(zPic + zDes)} 
                    style={{ position: 'absolute', zIndex: zPic }} 
                />
            </div>
            <Travaux />
        </>
    );
};

export default Projets;
