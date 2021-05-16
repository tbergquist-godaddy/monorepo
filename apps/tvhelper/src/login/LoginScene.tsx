import { Link, CenterForm } from '@tbergq/components';
import Box from 'components/Box';
import dynamic from 'next/dynamic';

import LoginForm from './LoginForm';

const LoginError = dynamic(() => import('./LoginError'));

type Props = Readonly<{
  loginFailed: boolean;
}>;

export default function Login(props: Props) {
  return (
    <Box pt={8}>
      <CenterForm>
        <LoginForm />
        <Box pt={8}>
          {props.loginFailed ? <LoginError /> : null}
          <Link prefetch={true} href="/signup">
            Don&lsquo;t have an account? Signup
          </Link>
        </Box>
      </CenterForm>
    </Box>
  );
}
