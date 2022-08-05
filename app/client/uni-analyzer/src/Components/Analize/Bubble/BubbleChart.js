import {React} from 'react';
import { theme } from "../../theme";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BubbleController
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(BubbleController, LinearScale, PointElement, Tooltip, Legend);

export function BubbleChart(props) {
  var points=[];
  var studentsResult=[]
  var answers = ["Residencia","Faltas","PC1","Tareas","Prácticas","Parcial"]
  for (const student of props.classrooms.students){
    console.log(student)
    points.push({
      x:student.answers[answers.indexOf(props.vars.x)],
      y:student.answers[answers.indexOf(props.vars.y)],
      r:student['mark_prediction'],
    })
    studentsResult.push(student.prediction)
  }
  const options = {
    plugins:{
      legend: {
        display: false,
      }
    },
    responsive:true,
    scales: {
      yAxes: {
        beginAtZero:true,
        title: {
            display: true,
            text: props.vars.y,
            font: {
              size:15,
              color: theme.palette.primary.dark,
              weight: "bold",
            }
        },
        ticks: {
            precision: 0
        }
      },
      xAxes:{
        title: {
          display: true,
          text: props.vars.x,
          font: {
              size: 15,
              color: theme.palette.primary.dark,
              weight: "bold",
          }
        },
      }
    },
  };
  var data = {
    datasets: [
      {
        label: `Salon ${props.room}`,
        data: points,
        pointBackgroundColor: function(context) {
          var index = context.dataIndex;
          if (studentsResult[index] === 1) return "#28a745"
          else return "#dc3545"
      }
      }
    ],
  };
  //const chartRef = useRef();
  return <Bubble options={options} data={data}/>;
}