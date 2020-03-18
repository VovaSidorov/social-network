import React from 'react';
import userPhoto from '../../essets/images/user.png';
import styles from './style.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";



let Users=(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
return (
     <div>
         <div>
             {
                 pages.map(p=>{
                     return <span onClick={()=>props.onPageChanged(p)} className={props.currentPage == p && styles.selectedPage} key={p}>{p}</span>
                 })
             }
         </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                     <NavLink to={'/profile/'+u.id}>
                         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                     </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "44710690-cea3-4aa6-b22a-5616fcf5eb47"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });

                        }}>Unfollow</button>

                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "44710690-cea3-4aa6-b22a-5616fcf5eb47"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode==0){
                                        props.follow(u.id);
                                    }
                                });
                        }}>Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
)
};

export default Users;

