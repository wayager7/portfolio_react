import React, { useState, useEffect, useMemo } from 'react';
import projet from './data/pr_li_projets.json';
import './style/pr_details.scss';

const Details = ({ prID }) => {
    // const [projetDetails, setProjetDetails] = useState(projet.find(p => p.id === prID));
    // if (!projetDetails) {
    //     return <div>Projet non trouvé</div>;
    // }

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
        <div className="projet-details">
            <div className='top'>
                <div className='img'>
                    <img src={projetDetails.images[3]} alt="" />
                </div>
                <div className='info'>
                    <h2>{projetDetails.name}</h2>
                    <div className='tags'>
                        {projetDetails.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                    <p>{projetDetails.description}</p>
                    {projetDetails.link && (
                        projetDetails.link.map((linkobj, index) =>(
                            <>
                                <a key={index} href={linkobj.url} target="_blank" rel="noopener noreferrer">{linkobj.type}</a> •<span> </span>
                            </>
                        ))
                    )}
                    <p>{projetDetails.date}</p>

                </div>
                
            </div>
            <div className='bottom'>
                <div className='left'>
                    <h3>Informations about projet</h3>
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
                
                {projetDetails.team && (
                    <div className='team'>
                        <h4>team</h4>
                        {projetDetails.team.map((member, index) => (
                            <div key={index} className='member'>
                                <a key={index} href={member.lkdn}>{member.nom}</a>
                                <br />
                                <span>{member.role}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            
        </div>
    );
};
export default Details;