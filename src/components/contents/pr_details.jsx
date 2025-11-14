import React, { useState } from 'react';
import projet from './data/pr_li_projets.json';
import './style/pr_details.scss';

const Details = ({ prID }) => {
    const [projetDetails, setProjetDetails] = useState(projet.find(p => p.id === prID));
    // if (!projetDetails) {
    //     return <div>Projet non trouvé</div>;
    // }
    return (
        <div className="projet-details">
            <div className='top'>
                <div className='img'>
                    <img src={projetDetails.images[0]} alt="" />
                </div>
                <div className='info'>
                    <h2>{projetDetails.name}</h2>
                    <div className='tags'>
                        {projetDetails.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                    <p>{projetDetails.description}</p>
                    <p>{projetDetails.date}</p>
                    {projetDetails.link && (
                        <a href={projetDetails.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    )}
                </div>
                
            </div>
            <div className='bottom'>
                {/* <h3>Informations about projet</h3> */}
                {projetDetails.contexte && (
                    <div className='section contexte'>
                        <h4>contexte</h4>
                        <p>{projetDetails.contexte}</p>
                    </div>
                )}
                {projetDetails.objectif && (
                    <div className='section objectif'>
                        <h4>objectif</h4>
                        <p>{projetDetails.objectif}</p>
                    </div>
                )}
                {projetDetails.choix && (
                    <div className='section choix'>
                        <h4>choix</h4>
                        <p>{projetDetails.choix}</p>
                    </div>
                )}
                {projetDetails.bilan && (
                    <div className='section bilan'>
                        <h4>bilan</h4>
                        <p>{projetDetails.bilan}</p>
                    </div>
                )}
            </div>

            
        </div>
    );
};
export default Details;