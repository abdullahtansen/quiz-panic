import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { useLoaderData } from "react-router-dom";
import './Statics.css';

const Statics = () => {
  const data = useLoaderData();
  const views = data.data;
  console.log(views)
  
  return (
    <div>
      <h4>This Is statics</h4>
     
        <div className="chart">
          <BarChart width={430} height={250} data={views} >
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
           {
            views.map(view=>  <Bar  name={view.name} fill="#8884d8" />)
           }
           
            <Bar dataKey='total' fill="#82ca9d" />
          </BarChart>
        </div>
      
    </div>
  );
};

export default Statics;
