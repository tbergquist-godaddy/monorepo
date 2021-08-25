import { Button } from '@tbergq/components';
import { FormikInput as InputField } from '@tbergq/formik-wrapper';
import { Form, useFormikContext } from 'formik';

import { classNames } from './SearchForm.css';

export default function SearchForm(): JSX.Element {
  const { isSubmitting } = useFormikContext();
  return (
    <Form action="/" method="get">
      <div className={classNames.formContent}>
        <InputField
          labelClassName={classNames.label}
          name="query"
          dataTest="SearchFormInput"
          label="Search"
        />
        <div className={classNames.buttonWrapper}>
          <Button
            className={classNames.button}
            loading={isSubmitting}
            dataTest="SearchFormButton"
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
}
