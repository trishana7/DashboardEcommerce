"use client";
import Image from "next/image";
import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/DoughnutChart";
import UserInfo from "@/components/UserInfo";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Dashboard() {
  const demoData1 = {
    labels: ["Book", "Bag"],
    datasets: [
      {
        data: [1, 2],
        backgroundColor: ["#80D7D9", "#ECA0A5"],
        hoverOffset: 6,
        hoverBorderColor: "white",
      },
    ],
  };
  const demoData2 = {
    labels: ["Book", "Shoe", "Bag"],
    datasets: [
      {
        data: [5, 2, 1],
        backgroundColor: ["#80D7D9", "#ECA0A5", "#FCDA62"],
        hoverOffset: 6,
        hoverBorderColor: "white",
      },
    ],
  };
  const demoData3 = {
    labels: ["Book", "Shoe", "Tie", "Bag"],
    datasets: [
      {
        data: [5, 2, 4, 2],
        backgroundColor: ["#80D7D9", "#ECA0A5", "#7A8FC4", "#FCDA62"],
        hoverOffset: 6,
        hoverBorderColor: "white",
      },
    ],
  };
  const barChartData1 = {
    labels: ["a", "b", "c"],
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: "#65cfef",
        borderRadius: 8,
        maxBarThickness: 100,
      },
    ],
  };
  const barChartData2 = {
    labels: ["a", "b", "c", "f", "g"],
    datasets: [
      {
        data: [2, 2, 3, 5, 3],
        backgroundColor: "#dfef65",
        borderRadius: 8,
        maxBarThickness: 100,
      },
    ],
  };
  const barChartData3 = {
    labels: ["a", "b", "c", "d", "e", "f", "g"],
    datasets: [
      {
        data: [4, 2, 3, 4, 1, 6, 7],
        backgroundColor: "#a371b8",
        borderRadius: 8,
        maxBarThickness: 100,
      },
    ],
  };
  const [salesChart, setSalesChartData] = useState(barChartData1);
  const [invertoryChart, setInvertoryChartData] = useState(barChartData2);
  const [marketingChart, setMarketingChartData] = useState(barChartData3);
  const [customerChart, setCustomerChartData] = useState(demoData1);
  const [selectedInterval, setSelectedInterval] = useState("daily");

  const handleIntervalChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedInterval(selectedValue);
    if (selectedValue === "daily") {
      setSalesChartData(barChartData1);
      setInvertoryChartData(barChartData2);
      setMarketingChartData(barChartData3);
      setCustomerChartData(demoData1);
    }
    if (selectedValue === "weekly") {
      setSalesChartData(barChartData2);
      setInvertoryChartData(barChartData3);
      setMarketingChartData(barChartData1);
    }
    if (selectedValue === "monthly") {
      setSalesChartData(barChartData3);
      setInvertoryChartData(barChartData1);
      setMarketingChartData(barChartData2);
      setCustomerChartData(demoData2);
    }
    if (selectedValue === "yearly") {
      setSalesChartData(barChartData3);
      setInvertoryChartData(barChartData2);
      setMarketingChartData(barChartData1);
      setCustomerChartData(demoData3);
    }
  };

  return (
    <>
      <div className="flex">
        <NavBar />
        <div className="w-full">
          <header className="flex justify-between px-8 p-4 lg:p-6 shadow bg-white mb-1 sticky top-0">
            <h1 className="text-xl font-semibold flex items-center">
              <button className="btn-open-menu inline-block lg:hidden mr-2 lg:mr-6">
                <Image
                  src="/menu.svg"
                  alt="menu"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
              </button>
              <span className="text-gray-900">Dashboard</span>
            </h1>
            <UserInfo />
          </header>

          <div className="px-10 py-8">
            <div className="flex justify-end pb-3">
              <select
                name="interval"
                id="interval"
                value={selectedInterval}
                onChange={handleIntervalChange}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Sales Trend</p>
                <BarChart data={salesChart} height="400" width="500" />
              </div>
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">
                  Customer Purchase Behavior
                </p>
                <div className="flex justify-center items-center ">
                  <DoughnutChart data={customerChart} height="350" />
                </div>
              </div>
            </div>
            <div className="pt-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Inventory</p>
                <div className="flex justify-center items-center ">
                  <BarChart data={invertoryChart} height="350" width="500" />
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">
                  Marketing Campaigns
                </p>
                <BarChart data={marketingChart} height="350" width="500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
