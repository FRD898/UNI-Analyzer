import {React,useEffect,useRef} from 'react';
import { theme } from "../../theme";
import {
Chart as ChartJS,
LinearScale,
PointElement,
BarElement,
Tooltip,
Legend,
BarController,
CategoryScale,
} from 'chart.js';
import { Bar,Chart } from 'react-chartjs-2';

ChartJS.register(LinearScale,CategoryScale, BarElement, Tooltip, Legend, BarController);

export function BarChart(props) {
    var points={};
    var studentsResult=[]
    var vars = ["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial","Resultado"]
    var category = vars.indexOf(props.var)
    for (const student of props.classrooms.students){
        studentsResult.push(student.prediction)
        var cat = category===6?student['prediction']:student.answers[category]
        if(category==0)
            (cat==0?cat="Lima":cat="Otro Departamento")
        else if(category==2 || category==3)
            (cat==0?cat="Sí":cat="No")
        else if(category == 6)
            cat==0?cat="Aprobará":cat="Reprobará"

        if(Object.keys(points).indexOf(cat.toString())===-1){
            points[cat]=1;
        }else{
            points[cat]++;
        }
    }
    const options = {
        responsive: true,
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
                ticks: {
                    font: {
                        weight: "bold",
                    }
                }
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
            id%2==0?theme.palette.primary.light:theme.palette.primary.dark
            )
        }
        ]
    };
    //const chartRef = useRef();
    return <Bar options={options} data={data} />;
}