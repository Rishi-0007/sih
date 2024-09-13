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
} from "@chakra-ui/react";
import useUsersStore, { User } from "../assets/store";
// import useUsersStore from "../store/useUsersStore"; // Import your Zustand store

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Use Zustand hook to get users from the store
  const { users } = useUsersStore();

  const handleAttendanceClick = (user: User) => {
    setSelectedUser(user);
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

        {/* Users Table */}
        <Box p={4} bg="blue.100" borderRadius="md" shadow="md">
          <Heading as="h2" size="md" mb={4} color="black">
            Present Users
          </Heading>

          <Table variant="simple" colorScheme="blue">
            <TableCaption placement="bottom">
              <Button colorScheme="blue">Show More</Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th px={2}>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td
                    px={2}
                    cursor="pointer"
                    onClick={() => handleAttendanceClick(user)}
                    _hover={{ bg: "gray.100" }}
                  >
                    {user.name}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedUser ? (
                <Box>
                  <Text fontWeight="bold">Name: {selectedUser.name}</Text>
                  {/* You can add other user details here if needed */}
                </Box>
              ) : (
                <Text>No user selected</Text>
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
