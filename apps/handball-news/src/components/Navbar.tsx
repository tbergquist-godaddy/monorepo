import { Box, Container, Text, Image } from '@chakra-ui/react';

export default function Navbar(): JSX.Element {
  return (
    <Box bg="green.600">
      <Container maxW="container.xl">
        <Box>
          <Box py="8" display="flex" alignItems="center">
            <Image
              boxSize="30px"
              objectFit="cover"
              src="https://via.placeholder.com/30"
              alt="logo"
              borderRadius="full"
              mr="2"
            />
            <Text fontSize="lg" color="white">
              Handball news
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
