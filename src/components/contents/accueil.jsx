import React from 'react';
import './style/accueil.scss';

const Accueil = ({ onLeaveClick, onStartClick }) => {
  return (
    <div className="accueil">
        <div className="menu">
            <button className="boutton" tabIndex="0" onClick={onStartClick}>
                <h2>Start</h2>
            </button>
            <button className="boutton" tabIndex="0" onClick={onLeaveClick}>
                <h2>Leave</h2>
            </button>
        </div>
    </div>
  );
};

export default Accueil;
