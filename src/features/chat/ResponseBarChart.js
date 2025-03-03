import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ResponseBarChart = ({ data }) => {
  return (
    <BarChart width={300} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Attended" fill="#82ca9d" />
    </BarChart>
  );
};

export default ResponseBarChart;
