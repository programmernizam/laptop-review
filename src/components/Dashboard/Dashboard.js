import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => setData(data.data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-start">
          <div>
            <h3 className="text-info m-0">Month wise sell</h3>
            <LineChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sell"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-start">
          <div>
            <h3 className="text-info m-0">Investment VS Revenue</h3>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-start">
          <div>
            <h3 className="text-info m-0">Investment VS Revenue</h3>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <Tooltip />
              <Bar dataKey="investment" stackId="a" fill="#8884d8" />
              <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-start">
          <div>
            <h3 className="text-info m-0">Investment VS Revenue</h3>
            <PieChart width={400} height={400} style={{ marginTop: "-50px" }}>
              <Pie
                data={data}
                dataKey="investment"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
