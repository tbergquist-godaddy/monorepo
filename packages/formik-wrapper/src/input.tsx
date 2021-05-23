import { InputField } from '@tbergq/components';
import { useField } from 'formik';

// TODO: Fix type
export default function Input(props: any) {
  const [field, { error, touched }] = useField(props.name);
  return <InputField {...props} {...field} error={touched && error} />;
}
