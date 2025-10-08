import React from "react";
import Window from './window.jsx'
import moi from '../assets/moi/WALDII.png';
import './waldi.scss';


function Waldi() {
  return (
    <div className="waldi lvl">
        <Window nom="recent_picture" id="waldi" contenu={<img src={moi} className="waldi__image" alt="Recent" />} />
        <Window nom="link" id="link" />
        <Window nom="softwares" id="softwares" />
        <Window nom="waldi_ia" id="IA" />
        <Window nom="Time_travel" id="frise" />
        <Window nom="Analysis" id="analysis" />
        <Window nom="auto_evaluation" id="skills" />
    </div>
  );
}

export default Waldi;
