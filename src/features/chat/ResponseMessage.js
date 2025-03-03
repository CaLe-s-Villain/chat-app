import React from "react";
import { Box } from "@mui/material";
import {
  BarChart,
  PieChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Pie,
  Cell,
} from "recharts";
import MessageItem from "./MessageItem";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ResponseMessage = ({ key, msg }) => {
  const data = msg[1].data;
  const isUser = msg[0].startsWith("User");
  if (msg[1].type === "pie") {
    return (
      <Box key={key}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>
    );
  } else if (msg[1].type === "bar") {
    return (
      <Box key={key}>
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Attended" fill="#82ca9d" />
        </BarChart>
      </Box>
    );
  } else {
    const text = msg[1];

    return <MessageItem isUser={isUser} message={text} key={key} />;
  }
};

export default ResponseMessage;
