"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const height = props.height || "300";
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ height: height + "px", width: height + "px" }}>
      <Doughnut
        data={props.data}
        options={options}
        height={height}
        width={height}
      />
    </div>
  );
};

export default DoughnutChart;
