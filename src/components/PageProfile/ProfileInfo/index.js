import React from "react";
import s from "./style.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://miro.medium.com/max/796/0*zyCI97lw5e_a7-sP.jpg' alt="sdfdsfs"/>
            </div>
            <div className={s.descriptionBlock}>
                AVA
            </div>
        </div>
    );
};

export default ProfileInfo;