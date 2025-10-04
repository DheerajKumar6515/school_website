import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Boys", 11],
  ["Girls", 7],
  ["Teacher", 10],
  ["Staff", 5],
  ["class", 10], // CSS-style declaration
];

export const options = {
  title: "My School",
  pieHole: 0.4,
  is3D: false,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
