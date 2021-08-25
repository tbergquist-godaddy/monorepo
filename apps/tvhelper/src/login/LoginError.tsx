import { Alert, Box } from '@tbergq/components';

export default function LoginError(): JSX.Element {
  return (
    <Box marginBottom="xxxLarge">
      <Alert type="danger">Wrong username or password</Alert>
    </Box>
  );
}
