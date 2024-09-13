import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";

interface Employee {
  name: string;
  position: string;
  attendance: string;
}

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  //Employees Data
  const employees = [
    { name: "John Doe", position: "Software Engineer", attendance: "95%" },
    { name: "Jane Doe", position: "Product Manager", attendance: "98%" },
    { name: "Ramphal", position: "Sweeper", attendance: "87%" },
  ];

  const handleAttendanceClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    onOpen();
  };

  return (
    <>
      <Navbar />
      <Box className="container mt-5">
        {/* Header */}
        <Flex align="center" mb={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Welcome Admin 🙏
          </Text>
        </Flex>

        {/* Employee Table */}
        <Box p={4} bg="blue.100" borderRadius="md" shadow="md">
          <Heading as="h2" size="md" mb={4} color="black">
            Present Employees
          </Heading>

          <Table variant="simple" colorScheme="blue" textColor={"black"}>
            <TableCaption placement="bottom">
              <Button colorScheme="blue">Show More</Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th px={2}>Name</Th>
                <Th px={2}>Position</Th>
                <Th isNumeric px={2}>
                  Attendance
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((employee, index) => (
                <Tr key={index}>
                  <Td px={2}>{employee.name}</Td>
                  <Td px={2}>{employee.position}</Td>
                  <Td
                    px={2}
                    isNumeric
                    cursor="pointer"
                    onClick={() => handleAttendanceClick(employee)}
                    _hover={{ bg: "gray.100" }}
                  >
                    {employee.attendance}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Notifications */}
        <Box mt={8} p={4} bg="yellow.100" borderRadius="md" shadow="md">
          <Heading as="h2" size="md" mb={4} color="black">
            Notifications
          </Heading>

          {/* Sample Notification 1 */}
          <Box mb={4}>
            <Text fontSize="md" fontWeight="light" color="gray">
              New meeting scheduled for tomorrow at 10:00 AM.
            </Text>
            <ButtonGroup mt={2}>
              <Button colorScheme="green">ACCEPT</Button>
              <Button colorScheme="red">DECLINE</Button>
              <Button bg="gray.200" color="black" _hover={{ bg: "gray.300" }}>
                DETAILS
              </Button>
            </ButtonGroup>
          </Box>

          {/* Sample Notification 2 */}
          <Box mb={4}>
            <Text fontSize="md" fontWeight="light" color="gray">
              You have a new message from HR regarding policy updates.
            </Text>
            <ButtonGroup mt={2}>
              <Button bg="gray.200" color="black" _hover={{ bg: "gray.300" }}>
                VIEW DETAILS
              </Button>
            </ButtonGroup>
          </Box>
        </Box>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Employee Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedEmployee ? (
                <Box>
                  <Text fontWeight="bold">Name: {selectedEmployee.name}</Text>
                  <Text>Position: {selectedEmployee.position}</Text>
                  <Text>Attendance: {selectedEmployee.attendance}</Text>
                </Box>
              ) : (
                <Text>No employee selected</Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Admin;
