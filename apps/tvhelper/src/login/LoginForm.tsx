import { LoginForm as CommonLoginForm, useShowToast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';
import { useMutation, graphql } from 'react-relay';
import { LoginFormMutation } from '__generated__/LoginFormMutation.graphql';

const mutation = graphql`
  mutation LoginFormMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function LoginForm() {
  const [loginMutation] = useMutation<LoginFormMutation>(mutation);

  const show = useShowToast();

  const onSubmit = ({ username, password }, { setSubmitting }) => {
    loginMutation({
      variables: { username, password },
      onCompleted: (response) => {
        const success = response?.tvHelperLogin?.success;
        const token = response?.tvHelperLogin?.token;
        if (success === true && token != null) {
          cookie.set(TOKEN_KEY, token, { expires: 365 });
          Router.push({ pathname: '/favorites' });
        } else {
          show({ text: 'Login failed', type: 'danger' });
        }
        setSubmitting(false);
      },
    });
  };

  return <CommonLoginForm action="/api/login" method="POST" onSubmit={onSubmit} />;
}
