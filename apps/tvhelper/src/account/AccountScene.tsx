import { Heading, Container, Box } from '@tbergq/components';

import ChangePasswordForm from './changePassword/ChangePasswordForm';

export default function AccountScene(): JSX.Element {
  return (
    <Container>
      <Box paddingY="xxxLarge">
        <Heading>My Account</Heading>
      </Box>
      <Box paddingY="xxxLarge">
        <ChangePasswordForm />
      </Box>
    </Container>
  );
}
