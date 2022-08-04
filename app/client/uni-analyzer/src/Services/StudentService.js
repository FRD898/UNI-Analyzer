import {Post,Get} from "./Methods"
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
            return res.class===0?`No aprobará. Nota aprox:${res.reg}`:`Aprobará. Nota aprox:${res.reg}`
        }
    )
}



export {predictStudentPerformance}