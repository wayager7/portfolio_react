import React from 'react';
import croixaf from '../assets/croixaf.png';

function Window(props) {
  return (
    <div className="window" id={props.id}>
        <div className="title-bar">
            <h1>{props.nom}</h1>
            <img src={croixaf} alt="fermer" />
        </div>
        <div className="window-content">
            {props.contenu}
        </div>
    </div>
  );
}

export default Window;