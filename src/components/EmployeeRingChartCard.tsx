import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Heading, Card, CardBody } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface EmployeeRingChartCardProps {
  presentEmployees: number;
  totalEmployees: number;
}

const EmployeeRingChartCard: React.FC<EmployeeRingChartCardProps> = ({
  presentEmployees,
  totalEmployees,
}) => {
  const [progress, setProgress] = useState(0); // State to animate the progress

  const percentage =
    totalEmployees > 0 ? (presentEmployees / totalEmployees) * 100 : 0;

  // Animate the progress from 0 to the final value
  useEffect(() => {
    let animationProgress = 0;
    const interval = setInterval(() => {
      animationProgress += 1;
      if (animationProgress >= percentage) {
        clearInterval(interval);
        animationProgress = percentage; // Ensure it ends exactly at the percentage
      }
      setProgress(animationProgress);
    }, 15); // Adjust speed by changing this value

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [percentage]);

  return (
    <Card borderRadius="lg" shadow="lg" overflow="hidden" marginY={4}>
      <CardBody bg="gray.50" p={6}>
        {/* Card Header */}
        <Heading size="md" mb={6} textAlign="center" color="gray.700">
          Employee Attendance
        </Heading>

        {/* Concentric Ring Chart with Animation */}
        <Flex justify="center" align="center" mb={6}>
          <Box width="160px">
            <CircularProgressbar
              value={progress}
              text={`${presentEmployees}/${totalEmployees}`}
              styles={buildStyles({
                textColor: "#2D3748", // Dark gray for text
                pathColor: "#4FD1C5", // Teal for the progress
                trailColor: "#EDF2F7", // Light gray for the trail
              })}
            />
          </Box>
        </Flex>

        {/* Percentage Info */}
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="teal.600"
          textAlign="center"
        >
          {progress.toFixed(2)}% Present
        </Text>
      </CardBody>
    </Card>
  );
};

export default EmployeeRingChartCard;
