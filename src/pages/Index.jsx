import { Box, Heading, Text, List, ListItem, ListIcon, Divider, Container, Link, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" mb={10}>
        <Heading mb={4}>Devika Architecture</Heading>
        <Text fontSize="lg">An advanced AI software engineer that can understand high-level human instructions.</Text>
        <Image src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMEFJJTIwc29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHx8fDE3MTM3MjM1OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Advanced AI Software Engineer" my={5} />
      </Box>

      <Divider my={10} />

      <Box mb={10}>
        <Heading size="lg" mb={5}>
          Overview
        </Heading>
        <Text>Devika consists of several key components including Agent Core, Agents, Language Models, and more, designed to orchestrate AI planning, reasoning, and execution processes.</Text>
      </Box>

      <Box mb={10}>
        <Heading size="lg" mb={5}>
          Key Components
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Agent Core: Orchestrates the overall AI planning, reasoning, and execution process.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Agents: Handle specific tasks like planning, research, coding, and reporting.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Language Models: Utilizes models like GPT-4 for natural language understanding.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Browser Interaction: Enables web browsing and interaction with web elements.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Project Management: Manages project-related data organization and persistence.
          </ListItem>
        </List>
      </Box>

      <Divider my={10} />

      <Box mb={10}>
        <Heading size="lg" mb={5}>
          Conclusion
        </Heading>
        <Text>Devika is a complex system that combines AI and automation techniques to deliver an intelligent programming assistant. It's designed with modularity, flexibility, and transparency to handle sophisticated tasks.</Text>
      </Box>

      <Box textAlign="center">
        <Link href="https://github.com/devika-ai" isExternal color="teal.500">
          Learn more about Devika on GitHub
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
