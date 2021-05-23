import { Container, Heading } from '@tbergq/components';
import Box from 'components/Box';

import SignupForm from './SignupForm';

export default function Signup() {
  return (
    <Container>
      <Box pt={8} mx="auto" width={['80%', '80%', '50%']}>
        <Box mb={8}>
          <Heading>Signup</Heading>
        </Box>
        <SignupForm />
      </Box>
    </Container>
  );
}
