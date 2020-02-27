import React from "react";
import s from "./style.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://linguist.lviv.ua/wp-content/uploads/2015/02/image.png' alt="sdfdsfs"/>
            </div>
            <div className={s.descriptionBlock}>
                AVA
            </div>
        </div>
    );
};

export default ProfileInfo;