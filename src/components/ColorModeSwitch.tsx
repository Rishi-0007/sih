import {
  HStack,
  Switch,
  Text,
  useColorMode,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack
      padding={4}
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <HStack spacing={2} alignItems="center">
        <Text fontWeight="bold" marginY={1}>
          Theme:{" "}
        </Text>
        <Icon
          as={isDark ? FaMoon : FaSun}
          color={isDark ? "yellow.300" : "gray.600"}
        />
      </HStack>

      <Box>
        <Switch
          id="color-mode-switch"
          isChecked={isDark}
          onChange={toggleColorMode}
          colorScheme="teal"
          size="md"
        />
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
