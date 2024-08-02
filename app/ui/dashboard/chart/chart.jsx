"use client";

import styles from "./chart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    visit: 3000,
    click: 4500,
  },
  {
    name: 'Tue',
    visit: 3200,
    click: 4300,
  },
  {
    name: 'Wed',
    visit: 3400,
    click: 3500,
  },
  {
    name: 'Thu',
    visit: 5000,
    click: 4560,
  },
  {
    name: 'Fri',
    visit: 8000,
    click: 4500,
  },
  {
    name: 'Sat',
    visit: 4000,
    click: 9500,
  },
  {
    name: 'Sun',
    visit: 3000,
    click: 4500,
  },
];


const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap of Subs</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart