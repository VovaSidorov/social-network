import * as axios from "axios";

let baseUrl ="https://social-network.samuraijs.com/api/1.0/";

const  instance = axios.create({
    withCredentials: true,
    baseUrl:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "44710690-cea3-4aa6-b22a-5616fcf5eb47"
    }
})

export const usersApi = {
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data;
            })
    }
}


export const getUsers2=(currentPage=1,pageSize=10)=> {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data;
        })
}