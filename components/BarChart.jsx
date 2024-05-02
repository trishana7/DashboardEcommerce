"use client";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChart = (props) => {
  const height = props.height || "300";
  const width = props.width || "300";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            return " " + context.label + " - " + context.formattedValue;
          },
          title: function () {
            return "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#424142",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      y: {
        ticks: {
          color: "#ABABAB",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
    },
  };

  return (
    <div className="w-full px-8" style={{ height: height + "px" }}>
      <Bar data={props.data} options={options} height={height} width={width} />
    </div>
  );
};

export default BarChart;
