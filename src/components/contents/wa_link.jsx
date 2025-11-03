import React from "react";
import './style/wa_link.scss';
import cv from '../../assets/moi/cv2025_10_24.pdf';
import ico_cv from '../../assets/moi/ico_cv.png';
import ico_lkdn from '../../assets/moi/ico_lkdn.png';
import ico_git from '../../assets/moi/ico_git.png';
import ico_bento from '../../assets/moi/ico_bento.png';

function Link() {
    return (
        <div className="link">
            <a className="link_item" href={cv} target="_blank"> 
                <img className="ico" src={ico_cv} alt="" />
                <p>cv</p>
            </a>
            <a className="link_item" href="https://www.linkedin.com/in/waldi-fiaga/" target="_blank">
                <img className="ico" src={ico_lkdn} alt="" />
                <p>lkdn</p>
            </a>
            <a className="link_item" href="https://github.com/wayager7" target="_blank">
                <img className="ico" src={ico_git} alt="" />
                <p>git</p>
            </a>
            <a className="link_item" href="https://bento.me/wayager" target="_blank">
                <img className="ico" src={ico_bento} alt="" />
                <p>bento</p>
            </a>
        </div>
    );
}

export default Link;
    