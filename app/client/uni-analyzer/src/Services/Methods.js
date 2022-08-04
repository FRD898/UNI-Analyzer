import axios from "axios";
const baseURL = process.env.REACT_APP_SERVER
async function Post(route,data){
    var res;
    await axios.post(baseURL+route,data)
    .then((response)=>{
        if(response.status == 200){
            res = response.data.response
        }else{
            res= null
        }
    })
    .catch((error)=>{
        console.error(error);
        res = null;
    })
    return res;
}

async function Get(route,data){
    var res;
    await axios.get(baseURL+route,data)
    .then((response)=>{
        if(response.status == 200){
            res = response.data
        }else{
            res= null
        }
    })
    .catch((error)=>{
        console.log(error);
        res = null;
    })
    return res;
}

export {Post, Get}
