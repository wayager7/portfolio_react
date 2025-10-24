import React from "react";
import './wa_link.scss';
import cv from '../../assets/moi/cv2025_10_24.pdf';

function Link() {
    return (
        <div className="link">
            <a className="link_item" href={cv} target="_blank"></a>
            <a className="link_item" href="https://www.linkedin.com/in/waldi-fiaga/" target="_blank"></a>
            <a className="link_item" href="https://github.com/wayager7" target="_blank"></a>
            <a className="link_item" href="https://bento.me/wayager" target="_blank"></a>
        </div>
    );
}

export default Link;
    