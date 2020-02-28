import React from "react";
import s from './style.module.css';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const PageProfile = ({postData}) => {
    return (
        <div>
               <ProfileInfo/>
                <MyPosts postData={postData}/>
        </div>
    );
};

export default PageProfile;