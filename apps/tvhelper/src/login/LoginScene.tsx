import { Container, Box } from '@tbergq/components';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import LoginForm from './LoginForm';

const LoginError = dynamic(() => import('./LoginError'));

type Props = Readonly<{
  loginFailed: boolean;
}>;

export default function Login(props: Props): JSX.Element {
  return (
    <Container>
      <Box paddingTop="xxxLarge">
        <Box
          marginX="auto"
          width={{
            mediumMobile: '50%',
            tablet: '80%',
          }}
        >
          <LoginForm />
          <Box paddingTop="xxxLarge">
            {props.loginFailed ? <LoginError /> : null}
            <Link prefetch={true} href="/signup">
              <a href="/signup">Don&lsquo;t have an account? Signup</a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
