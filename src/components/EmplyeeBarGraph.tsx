import { Box } from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmplyeeBarGraph = () => {
  // Hardcoded work hours for the past week (in hours)
  const workHoursData = [8, 7.5, 6, 8.5, 7, 6.5, 8]; // Example data

  // Data for the bar chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Work Hours",
        data: workHoursData,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Employee Working Hours for the Past Week",
      },
    },
  };

  return (
    <>
      {/* Bar Graph for Work Hours */}
      <Box bg="white" p={4} borderRadius="md" shadow="md" w="100%">
        <Bar data={data} options={options} />
      </Box>
    </>
  );
};

export default EmplyeeBarGraph;
