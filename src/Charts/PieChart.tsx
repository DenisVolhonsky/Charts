import React from "react";
import { PieChart as PChart, Pie, Cell } from "recharts";


const COLORS = ["#d4c361", "#6eb5b5", "#6b97b5", "#d79de0", "#acaae6"];

const renderLabel = (entry: any) => (`${entry.name} ${entry.value}`)

const PieChart = ({mappedData}: any) => {
  return (
    <PChart width={510} height={510}>
      <Pie data={mappedData} dataKey="value" cx="50%" cy="50%" outerRadius={200} fill="#82ca9d" label={renderLabel}>
        {mappedData.map((entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PChart>
  );
}

export default PieChart