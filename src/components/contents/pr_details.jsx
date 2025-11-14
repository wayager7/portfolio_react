import react, { useState } from 'react';
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
                </div>
                
                {/* if (projetDetails.teammates) {
                    
                } */}
            </div>

            <p>{projetDetails.description}</p>
        </div>
    );
};
export default Details;