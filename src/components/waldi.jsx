import React from "react";
import Window from './window.jsx'
import moi from '../assets/moi/WALDII.png';
import './waldi.scss';
import Analysis from './contents/analysis.jsx';


function Waldi() {
  return (
    <div className="waldi lvl">
        <Window nom="recent_picture" id="waldi" contenu={<img src={moi} className="waldi__image" alt="Recent" />} />
        <Window nom="link" id="link" /> {/* lien vers les reseaux et cv */}
        <Window nom="softwares" id="softwares" /> {/* logiciels maitrisés */}
        <Window nom="waldi_ia" id="IA" />
        <Window nom="Time_travel" id="frise" />
        <Window nom="Analysis" id="analysis" contenu={<Analysis />} />
        <Window nom="auto_evaluation" id="skills" />
    </div>
  );
}

export default Waldi;
