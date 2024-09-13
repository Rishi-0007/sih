import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaCheck, FaClock, FaTimes } from "react-icons/fa";

import useUsersStore from "../assets/store";
import EmplyeeBarGraph from "../components/EmplyeeBarGraph";
import Navbar from "../components/Navbar";

const Employee: React.FC = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const toast = useToast();

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

          <EmplyeeBarGraph />

          <Box bg="blue.100" p={4} borderRadius="md" shadow="md" w="100%">
            <Text fontSize="xl" fontWeight="bold" color={"black"}>
              Today's Work Hours: 8 hours
            </Text>
          </Box>
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
