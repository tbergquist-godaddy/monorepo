import { Form, Formik } from 'formik';
import { object, string, ref } from 'yup';
import { Button } from '@tbergq/components';

import { classNames } from './signup-form.css';
import Input from '../input';

const validationSchema = object().shape({
  username: string().required(),
  password: string().required(),
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), null], 'Passwords must match'),
  email: string().required().email(),
});

interface User {
  username: string;
  email: string;
  password: string;
}

type Props = Readonly<{
  onSubmit: (user: User) => void;
  isLoading: boolean;
}>;

interface FormikValues extends User {
  confirmPassword: string;
}

export default function SignupForm(props: Props): JSX.Element {
  const onSubmit = ({ password, email, username }: FormikValues) => {
    props.onSubmit({ username, password, email });
  };
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={classNames.formGroup}>
          <Input name="username" label="Username" dataTest="usernameInput" />
        </div>
        <div className={classNames.formGroup}>
          <Input name="email" label="Email" dataTest="emailInput" />
        </div>
        <div className={classNames.formGroup}>
          <Input name="password" label="Password" type="password" dataTest="passwordInput" />
        </div>
        <div className={classNames.formGroup}>
          <Input
            name="confirmPassword"
            label="Confirm password"
            type="password"
            dataTest="confirmPasswordInput"
          />
        </div>
        <div className={classNames.button}>
          <Button type="submit" loading={props.isLoading} dataTest="submitButton">
            Confirm
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
