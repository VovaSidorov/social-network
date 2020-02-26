import React from "react";
import s from './style.module.css';
import MyPosts from "./MyPosts";

const PageProfile = () => {
    return (
        <div>
            <div>
                <img src='https://linguist.lviv.ua/wp-content/uploads/2015/02/image.png' alt="sdfdsfs"/>
            </div>
                <div>AVA</div>
                <MyPosts/>
        </div>
    );
};

export default PageProfile;