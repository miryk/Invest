import React from 'react'
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const backgroundColor = [
  'rgba(255, 99, 132, 0.7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(255, 206, 86, 0.7)',
  'rgba(75, 192, 192, 0.7)',
  'rgba(153, 102, 255, 0.7)',
  'rgba(255, 159, 64, 0.7)',
]

const options = {
  plugins: {
    title: {
      display: true,
      text: 'General Chart 2023'
    }
  }, 
  responsive: true,
  scales: {
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Guaranies Gs'
      }
    },
    x: {
      stacked: true
    }
  }
}

// console.log( parseInt("100.000".split('.').join("")))

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']

// const data = {
//   labels,
//   datasets: [
//     {
//     label: "data 1",
//     data: ["0", "100000", 0, 0, 0, "1000000"],
//     backgroundColor: backgroundColor[0]
//     }, 
//     {
//       label: 'data 2', 
//       data: [0, 0, "100000",0, "50000", 0, 250000, 0, 0 ],
//       backgroundColor: backgroundColor[1]
//     }, 
//     {
//       label: 'data 3',
//       data: [100000, 200000, 0, 0, 500000, 0],
//       backgroundColor: backgroundColor[2]
//     }
//   ]
// }



const GeneralGraph = ({bonds}) => {

  let data = {};
  let aux = [];
  
  if (bonds) {
    data = {
      labels, 
      datasets: bonds.map((bond, idx) => {
        const months = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0];
        // console.log(bond.payments)
        aux = [...bond.payments];
        aux.map((pay, idx) => months[dayjs(pay.date).get('month')] = parseInt(pay.value.split('.').join("")))
        // bond.payments.map((pay) => months[dayjs(pay.date).get('month')] = pay.value))
        // console.log(months);
        return {
          label: bond.issuingEntity, 
          backgroundColor: backgroundColor[idx],
          data: months
          // data: payments.map((pay) => console.log(dayjs(pay.date), 'MM'))
        }
      })
    }
    // console.log(aux)
  }



  // console.log(bonds.map(bond => bond.payments))
  return (
    <div className='my-12 text-black'>
    {
      bonds && bonds.length > 0 ? 
        <Bar options={options} data={data}/>
        :
        <Paper
        sx={{ margin: 2, padding: '10px'}}
      >
        <h1>You don't have bonds yet! Add and view the timeline here!</h1>
      </Paper>
      }
      </div>
  )
}

export default GeneralGraph