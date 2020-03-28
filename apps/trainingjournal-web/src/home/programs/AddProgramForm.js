// @flow

import * as React from 'react';
import { FloatingAddButton, SlideIn } from '@tbergq/components';
import { Formik } from 'formik';
import {
  createFragmentContainer,
  graphql,
  type RelayProp,
  type FragmentContainerType,
} from '@tbergq/relay';

import ProgramForm from './ProgramForm';
import type { AddProgramForm_user as User } from './__generated__/AddProgramForm_user.graphql';
import createProgramMutation from './mutations/createProgram';

type Props = {|
  +user: ?User,
  +relay: RelayProp,
|};

function AddProgramForm(props: Props) {
  const [showForm, setShowForm] = React.useState(false);
  const onSubmit = (values, action) => {
    if (props.user?.id != null) {
      createProgramMutation(
        props.relay.environment,
        { program: { name: values.name } },
        props.user.id,
        () => {
          action.setSubmitting(false);
          setShowForm(false);
        },
      );
    }
  };
  return (
    <>
      <FloatingAddButton
        onClick={() => setShowForm(show => !show)}
        rotate={showForm}
        ariaLabel="Create Program"
        dataTest="AddProgramButton"
      />
      <SlideIn isExpanded={showForm}>
        <Formik
          validate={values => {
            const errors = {};
            if (values.name === '') {
              errors.name = 'Required';
            }
            return errors;
          }}
          initialValues={{ name: '' }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <ProgramForm isSubmitting={isSubmitting} onCancel={() => setShowForm(false)} />
            </form>
          )}
        </Formik>
      </SlideIn>
    </>
  );
}

export default (createFragmentContainer(AddProgramForm, {
  user: graphql`
    fragment AddProgramForm_user on TraningJournalViewer {
      id
    }
  `,
}): FragmentContainerType<Props, React.Node>);
