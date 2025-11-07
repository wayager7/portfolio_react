import React from "react";
import Window from './window.jsx'
import moi from '../assets/moi/WALDII.png';
import './style/waldi.scss';
  import Link from './contents/wa_link.jsx';
  import Softwares from './contents/wa_software.jsx';
  import Didia from './contents/wa_didia.jsx'
  import Time from './contents/wa_time.jsx';
  import Analysis from './contents/wa_analysis.jsx';
  import Evaluation from './contents/wa_evaluation.jsx';


function Waldi() {
  return (
    <div className="waldi lvl">
        <Window nom="recent_picture" id="waldi" contenu={<img src={moi} className="waldi__image" alt="Recent" />} />
        <Window nom="link" id="link" contenu={<Link />} />
        <Window nom="softwares" id="softwares" contenu={<Softwares />} />
        <Window nom="waldi_ia" id="IA" contenu={<Didia />} />
        <Window nom="Time_travel" id="frise" contenu={<Time />} />
        <Window nom="Analysis" id="analysis" contenu={<Analysis />} />
        <Window nom="auto_evaluation" id="skills" contenu={<Evaluation />} />
    </div>
  );
}

export default Waldi;
