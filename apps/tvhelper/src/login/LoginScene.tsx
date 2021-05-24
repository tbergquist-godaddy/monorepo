import { Container } from '@tbergq/components';
import Link from 'next/link';
import Box from 'components/Box';
import dynamic from 'next/dynamic';

import LoginForm from './LoginForm';

const LoginError = dynamic(() => import('./LoginError'));

type Props = Readonly<{
  loginFailed: boolean;
}>;

export default function Login(props: Props) {
  return (
    <Container>
      <Box pt={8}>
        <Box mx="auto" width={['80%', '80%', '50%']}>
          <LoginForm />
          <Box pt={8}>
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
