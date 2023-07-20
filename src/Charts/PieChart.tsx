// import React, { useCallback, useState } from "react";
import { PieChart as PChart, Pie, Cell } from "recharts";

const data = [
  { name: "Developer", value: 400 },
  { name: "QA", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F"];

const renderLabel = (entry: any) => (`${entry.name} ${entry.value}`)

const PieChart = () => {
  return (
    <PChart width={510} height={510}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={200} fill="#82ca9d" label={renderLabel}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PChart>
  );
}

export default PieChart