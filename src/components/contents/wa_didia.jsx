import React, { useState, useEffect, useMemo } from "react";
import './wa_didia.scss'
import IAPNG from '../../assets/moi/ia.png'

function Didia() {
    return(
        <div className="IA">
            <div className="conv_ia">
                <div className="img_ia">
                    <img src={IAPNG} alt="" />
                </div>
                <div className="conv"></div>
            </div>
            <input type="text" name="CMD" id="question" required placeholder="COMMANDE" />
        </div>
    )
}

export default Didia;