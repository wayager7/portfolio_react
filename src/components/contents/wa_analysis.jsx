import React from "react";
import './wa_analysis.scss';
import frame from '../../assets/moi/Frame_252.png';

function Analysis() {
    return (
        <div className="analysis">
            <div className="ana_choice">
                <div className="ana_options">
                    <div className="ana_option">Large Cranium</div>
                    <div className="ana_option">Wide-angle vision</div>
                    <div className="ana_option">Flaming heart</div>
                    <div className="ana_option">Fairy fingers</div>
                    <div className="ana_option">Solid Support</div>
                </div>
                <div className="ana_img">
                    <img src={frame} alt="Frame 252" />
                </div>
            </div>
            <div className="ana_answere">
                <p>Impossible to know exactly what's hidden there, but many ideas are jostling around.</p>
            </div>
        </div>
    );
}

export default Analysis;


