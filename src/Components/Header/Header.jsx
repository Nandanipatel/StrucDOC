import React from 'react';
import style from "./Header.module.css";
import reportSvg from "../../Assets/report.svg";

function Header() {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={reportSvg} alt="Resume-Img"/>
            </div>
            <div className={style.description}>
                <p className={style.heading}>
                    <span>Structure</span> Health monitoring
                </p>
                <p className={style.heading}>
                     <span>System</span>
                </p>
            </div>
        </div>
    )
}

export default Header;