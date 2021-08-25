import { Container, Heading, Box } from '@tbergq/components';

import SignupForm from './SignupForm';

export default function Signup(): JSX.Element {
  return (
    <Container>
      <Box
        paddingTop="xxxLarge"
        marginX="auto"
        width={{
          mediumMobile: '80%',
          tablet: '50%',
        }}
      >
        <Box marginBottom="xxxLarge">
          <Heading>Signup</Heading>
        </Box>
        <SignupForm />
      </Box>
    </Container>
  );
}
