import react, { useState } from 'react';
import projet from './data/pr_ol_projets.json';
import './style/pr_projets.scss';

function ProjetsList({ onSelectProjet }){
    const [selectedProjet, setSelectedProjet] = useState(null);

    const handleSelectProjet = (id) => {
        setSelectedProjet(id);
        onSelectProjet(id);  // envoie l'id au parent
    };//merci copilot

    return(
        <div className='projets-list'>
            {projet.map((p)=>(
                <>
                    {/* <h2>selectionne un projet</h2> */}
                    <div className='projet' key={p.id} onClick={() => handleSelectProjet(p.id)}>
                        <div className='imgdiv'>
                            <img src={p.images} alt={p.name} />
                        </div>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <div className='tags'>
                            {p.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default ProjetsList;