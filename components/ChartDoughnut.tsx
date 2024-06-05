"use client";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

interface AttributeDoughnutProps {
  key: string;
  value: number;
  attribute: string;
  skill: string;
}

export default function ChartDoughnut({
  key,
  value,
  attribute,
}: AttributeDoughnutProps) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["orange", "black"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center h-[50px] w-[50px] container">
        <Doughnut data={data} options={options} />
        <p className="absolute text-[#999] text-2xl font-bold">{value}</p>
      </div>
      <p className="uppercase text-[#999] text-sm">{attribute}</p>
    </div>
  );
}
