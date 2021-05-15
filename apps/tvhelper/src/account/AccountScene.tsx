import { Heading, Container } from '@tbergq/components';
import Box from 'components/Box';

import ChangePasswordForm from './changePassword/ChangePasswordForm';

export default function AccountScene() {
  return (
    <Container>
      <Box py={8}>
        <Heading>My Account</Heading>
      </Box>
      <Box py={8}>
        <ChangePasswordForm />
      </Box>
    </Container>
  );
}
