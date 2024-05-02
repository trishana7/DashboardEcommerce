"use client";
import Image from "next/image";
import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/DoughnutChart";
import UserInfo from "@/components/UserInfo";
import NavBar from "@/components/NavBar";

export default function Dashboard() {
  const data = {
    labels: ["a", "b"],
    datasets: [
      {
        data: [1, 2],
        backgroundColor: ["#80D7D9", "#ECA0A5"],
        hoverOffset: 6,
        hoverBorderColor: "white",
      },
    ],
  };
  const chartData = {
    labels: ["a", "b", "c"],
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: "#CDB6A9",
        borderRadius: 8,
        maxBarThickness: 100,
      },
    ],
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
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Marketing</p>
                <BarChart data={chartData} height="400" width="500" />
              </div>
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Sale</p>
                <div className="flex justify-center items-center ">
                  <DoughnutChart data={data} height="350" />
                </div>
              </div>
            </div>
            <div className="pt-7 grid grid-cols-2 gap-8">
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Sale</p>
                <div className="flex justify-center items-center ">
                  <DoughnutChart data={data} height="320" />
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <p className="text-gray-900 px-8 py-4 font-bold">Marketing</p>
                <BarChart data={chartData} height="350" width="500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
