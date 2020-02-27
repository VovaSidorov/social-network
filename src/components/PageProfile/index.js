import React from "react";
import s from './style.module.css';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const PageProfile = () => {
    return (
        <div>
               <ProfileInfo/>
                <MyPosts/>
        </div>
    );
};

export default PageProfile;