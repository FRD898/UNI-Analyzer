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
    var points=[];
    var studentsResult=[]
    var answers = ["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial"]
    for (const student of props.classrooms.students){
        points.push(student['mark_prediction'])
        studentsResult.push(student.prediction)
    }
    console.log(studentsResult)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
    };
    const labels = points;
    const data = {
        labels,
        datasets: [
        {
            data: points,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
        ]
    };
    //const chartRef = useRef();
    return <Bar options={options} data={data} />;
}