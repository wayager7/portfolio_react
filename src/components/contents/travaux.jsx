import React from "react";
import Window from "../window.jsx";
import travaux from "../../assets/travaux.jpg"

const Travaux = () => {
    return (
        <>
            <div className="fondtrav"></div>
            <Window nom="sorry" id="travaux" contenu={
                <div className="trav">
                    <img src={travaux} alt="" /> 
                    <p>Désolé la zone que vous essayez de visiter est encore en travaux, veuillez repasser ulterieusemenet ou me contacter directement par ce mail ci</p>
                    <a href="mailto:waldifiaga80@gmail.com" className="after">waldifiaga80@gmail.com</a>
                </div>
            }/>
        </>
    )
}

export default Travaux;
