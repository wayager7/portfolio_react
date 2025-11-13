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
            <h2>{projetDetails.name}</h2>
            <p>{projetDetails.description}</p>
        </div>
    );
};
export default Details;