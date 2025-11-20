import React, { useState, useEffect, useMemo } from 'react';
import projet from './data/pr_li_projets.json';
import './style/pr_pictures.scss'


const Pirctures = ({ prID }) => {
    // const [projetDetails, setProjetDetails] = useState(projet.find(p => p.id === prID));

    const [projetDetails, setProjetDetails] = useState(null);

    // Met à jour quand prID change
    useEffect(() => {
        const details = projet.find(p => p.id === prID);
        setProjetDetails(details);
        console.log('Details mise à jour avec prID:', prID, details);
    }, [prID]);

    if (!projetDetails) {
        return <div>Projet non trouvé</div>;
    }
    
    return (
        <div className="proj-imgss">
            <div>
                <img className="proj-img" id="img0" src={projetDetails.images[0]} alt="" />
            </div>
            <div>
                <img className="proj-img" id="img1" src={projetDetails.images[1]} alt="" />
            </div>
            <div>
                <img className="proj-img" id="img2" src={projetDetails.images[2]} alt="" />
            </div>
        </div>
    )
}

export default Pirctures;