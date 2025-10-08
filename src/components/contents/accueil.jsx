import React from 'react';
import './accueil.scss';

const Accueil = ({ onLeaveClick, onStartClick }) => {
  return (
    <div className="accueil">
        <div className="menu">
            <div className="boutton" onClick={onStartClick}>
                <h2>Start</h2>
            </div>
            <div className="boutton" onClick={onLeaveClick}>
                <h2>Leave</h2>
            </div>
        </div>
    </div>
  );
};

export default Accueil;
