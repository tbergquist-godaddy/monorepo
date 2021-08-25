import { Formik, Form } from 'formik';
import { Heading, Button, useShowToast, Box } from '@tbergq/components';
import { FormikInput as InputField } from '@tbergq/formik-wrapper';
import { useMutation, graphql } from 'react-relay';
import { ChangePasswordFormMutation } from '__generated__/ChangePasswordFormMutation.graphql';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  password: yup.string().required(),
  newPassword: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('newPassword'), null], "Passwords don't match"),
});

export default function ChangePasswordForm(): JSX.Element {
  const show = useShowToast();
  const [changePassword, isLoading] = useMutation<ChangePasswordFormMutation>(graphql`
    mutation ChangePasswordFormMutation($password: String!, $newPassword: String!) {
      tvHelperChangePassword(password: $password, newPassword: $newPassword) {
        ... on ChangePasswordResponse {
          success
        }
        ... on ChangePasswordError {
          message
        }
      }
    }
  `);

  const onSubmit = ({ password, newPassword }) => {
    changePassword({
      variables: { password, newPassword },
      onCompleted: (res) => {
        if (res.tvHelperChangePassword?.message != null) {
          show({ text: res.tvHelperChangePassword.message, type: 'danger' });
        } else if (res.tvHelperChangePassword?.success === true) {
          show({ text: 'Password changed successfully', type: 'success' });
        }
      },
    });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
      validationSchema={validationSchema}
    >
      <Form>
        <fieldset>
          <legend>
            <Heading level="h2">Change password</Heading>
          </legend>
          <InputField type="password" name="password" label="Old password" />
          <InputField type="password" name="newPassword" label="New password" />
          <InputField type="password" name="confirmPassword" label="Confirm password" />
          <Box display="flex" justifyContent="flex-end">
            <Button loading={isLoading} type="submit">
              Change password
            </Button>
          </Box>
        </fieldset>
      </Form>
    </Formik>
  );
}
