import { Alert } from '@tbergq/components';
import Box from 'components/Box';

export default function LoginError() {
  return (
    <Box mb={8}>
      <Alert type="danger">Wrong username or password</Alert>
    </Box>
  );
}
