import axios from "axios";
const baseURL = "http://localhost:4000"
export default async function Post(route,data){
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
const predictStudentPerformance = (student,predictor)=>{
    return Post('/predict/student',
    {
        "user_name":"Freider Achic",
        "email":"fachicc@uni.pe",
        "password":"admin123",
        "predictor": predictor,
        'student':student,
    }
    ).then(
        (res)=>{
        if(res===null)
            return null
        else
            return res===0?'No aprobará':"Aprobará"
        }
    )
}
export {predictStudentPerformance}