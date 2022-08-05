import {React} from 'react';
//import { theme } from "../../theme";
import {
Chart as ChartJS,
Tooltip,
Legend,
PieController,
ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, PieController);

export function PieChart(props) {
    var points={};
    var studentsResult=[]
    var vars = ["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial","Resultado"]
    var category = vars.indexOf(props.var)
    for (const student of props.classrooms.students){
        studentsResult.push(student.prediction)
        var cat = category===6?student['prediction']:student.answers[category]
        if(category===0)
            (cat===0?cat="Lima":cat="Otro Departamento")
        else if(category===2 || category===3)
            (cat===0?cat="Sí":cat="No")
        else if(category === 6)
            cat===0?cat="Aprobará":cat="Reprobará"

        if(Object.keys(points).indexOf(cat.toString())===-1){
            points[cat]=1;
        }else{
            points[cat]++;
        }
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: 'false',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
                color: "black",
            },
        },
        scales:{
            x: {
                display:false
            }
        }
    };
    const labels = Object.keys(points);
    const data = {
        labels,
        datasets: [
        {
            label: props.var,
            data: Object.values(points),
            backgroundColor: labels.map((l,id)=>
            `rgb(${100+id*40},${70+id*10},75)`
            )
        }
        ]
    };
    //const chartRef = useRef();
    return <Pie options={options} data={data} />;
}