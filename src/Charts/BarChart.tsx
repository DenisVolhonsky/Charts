import React from "react";
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Male",
    male: 300,
  },
  {
    name: "Female",
    female: 700,
  },
];

const BarChart = () => {
  return (
    <BChart
      width={510}
      height={510}
      data={data}
      barGap={-200}
      barCategoryGap={50}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="male" fill="#8884d8" />
      <Bar dataKey="female" fill="#82ca9d" />
    </BChart>
  );
}

export default BarChart
