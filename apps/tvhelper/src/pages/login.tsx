import { GetServerSidePropsContext } from 'next';
import makeGetServerSideProps from 'services/get-serverside-props';

import LoginScene from '../login/LoginScene';

type Props = Readonly<{
  loginFailed: boolean;
}>;

export default function Login(props: Props) {
  return <LoginScene loginFailed={props.loginFailed} />;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const loginFailed = ctx.query.responseError != null;
  const { props } = await makeGetServerSideProps({ pageName: 'login', pageProps: { loginFailed } })(
    ctx,
  );

  if (props.token != null) {
    const res = ctx.res;
    res.writeHead(302, { Location: '/favorites' });
    res.end();
  }

  return {
    props,
  };
};
