import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  Spacer,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../components/Navbar";
import useUsersStore from "../assets/store";
import AttendanceCalendar from "../components/AttendanceCalendar";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Employee: React.FC = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [workingHours] = useState(8); // Example data for today's work hours
  const toast = useToast();

  // Hardcoded work hours for the past week (in hours)
  const workHoursData = [8, 7.5, 6, 8.5, 7, 6.5, 8]; // Example data

  const handleCheckInOut = () => {
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      toast({
        title: "Checked In",
        description: "You have successfully checked in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setIsCheckedIn(false);
      toast({
        title: "Checked Out",
        description: "You have successfully checked out.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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

  // current user
  const user = useUsersStore((state) => state.users[0]);

  return (
    <>
      <Navbar />
      <Box className="container mt-5">
        {/* Header */}
        <Flex align="center">
          <Text fontSize="2xl" fontWeight="bold">
            Welcome {user.name} 🙏
          </Text>
        </Flex>

        {/* Check-In/Out Status */}
        <Box mt={5} p={4} bg="gray.100" borderRadius="md" shadow="md">
          <Flex align="center">
            <Text
              fontSize="xl"
              color={isCheckedIn ? "green.500" : "red.500"}
              fontWeight="bold"
            >
              {isCheckedIn ? "You are Checked In" : "You are Checked Out"}
            </Text>
            <Spacer />
            <Button
              colorScheme={isCheckedIn ? "red" : "green"}
              onClick={handleCheckInOut}
            >
              <HStack spacing={3}>
                {isCheckedIn ? <FaTimes /> : <FaCheck />}
                <Text fontSize={"lg"} marginY={1}>
                  {isCheckedIn ? " Check Out" : " Check In"}
                </Text>
              </HStack>
            </Button>
          </Flex>
        </Box>

        {/* Working Hours */}
        <VStack mt={8} spacing={4}>
          <HStack>
            <FaClock style={{ marginRight: "8px" }} />
            <Text fontSize="xl" fontWeight="bold" marginY={1}>
              Working Hours
            </Text>
          </HStack>

          {/* Bar Graph for Work Hours */}
          <Box bg="white" p={4} borderRadius="md" shadow="md" w="100%">
            <Bar data={data} options={options} />
          </Box>
          <Box bg="blue.100" p={4} borderRadius="md" shadow="md" w="100%">
            <Text fontSize="xl" fontWeight="bold" color={"black"}>
              Today's Work Hours: {workingHours}
            </Text>
          </Box>
          {/* <Box
            bg="blue.100"
            p={4}
            borderRadius="md"
            shadow="md"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              as="h2"
              size="md"
              mb={4}
              color="black"
              alignSelf="flex-start"
            >
              Employee Performance
            </Heading>
            <AttendanceCalendar />
          </Box> */}
        </VStack>

        {/* Notifications (Placeholder) */}
        <Box mt={8} p={4} bg="yellow.100" borderRadius="md" shadow="md">
          <Text fontSize="md" fontWeight="light" color={"gray"}>
            No new notifications
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Employee;
