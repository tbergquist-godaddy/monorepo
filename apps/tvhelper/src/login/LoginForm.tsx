import { useShowToast, Button, Box } from '@tbergq/components';
import { FormikInput as Input } from '@tbergq/formik-wrapper';
import { TOKEN_KEY } from 'environment';
import Router from 'next/router';
import cookie from 'js-cookie';
import { useMutation, graphql } from 'react-relay';
import { LoginFormMutation } from '__generated__/LoginFormMutation.graphql';
import { object, string } from 'yup';
import { Form, Formik } from 'formik';

const mutation = graphql`
  mutation LoginFormMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

const validationSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

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

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box marginBottom="increased">
            <Input name="username" label="Username" />
          </Box>
          <Box marginBottom="increased">
            <Input name="password" type="password" label="Password" />
          </Box>
          <Box display="flex" justifyContent="flex-end" marginBottom="increased">
            <Button loading={isSubmitting} type="submit" dataTest="LoginFormSubmit">
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
