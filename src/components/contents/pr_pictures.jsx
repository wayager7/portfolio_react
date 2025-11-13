import React , { useState }  from "react";
import projet from './data/pr_li_projets.json';
import './style/pr_pictures.scss'


const Pirctures = ({ prID }) => {
    const [projetDetails, setProjetDetails] = useState(projet.find(p => p.id === prID));
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