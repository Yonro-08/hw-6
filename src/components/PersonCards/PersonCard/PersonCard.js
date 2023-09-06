import { useState } from "react";
import { Avatar, Flex, Box, Text, Button } from "@chakra-ui/react";

export default function PersonCard({ name, email, age, avatarUrl }) {
  const [showAge, setShowAge] = useState(false);

  return (
    <Flex
      alignItems="center"
      gap="20px"
      borderRadius="20px"
      minH="160px"
      padding="10px 20px"
      color="white"
      bg="rgb(42, 84, 104)"
    >
      <Avatar src={avatarUrl} alt="profile" size="xl" />
      <Box height="100%" padding="10px 0">
        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Button
          padding="0"
          color="white"
          fontWeight="400"
          bg="transparent"
          _hover={{ bg: "none", color: "rgba(255,255,255, 0.75)" }}
          onClick={() => setShowAge(!showAge)}
        >
          Show Age
        </Button>
        {showAge && <p>Age: {age}</p>}
      </Box>
    </Flex>
  );
}
