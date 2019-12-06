// @flow

import * as React from 'react';
import styled from 'styled-components';
import { InputField, Stack, Button } from '@tbergq/components';

const Wrapper = styled.div`
  max-height: ${props => (props.isExpanded ? '600px' : 0)};
  overflow-y: hidden;
  transition: max-height 0.3s linear;
`;

type Props = {|
  +isVisible: boolean,
|};
/**
 * To animate in, component must be in the dom, with isExpanded false, then isExpanded must change to true
 * To animate out, component must be in the dom, with isExpanded true, then isExpanded must change to false, and component removed from DOM
 * */
export default function ExerciseForm(props: Props) {
  const [isExpanded, setIsExpanded] = React.useState(props.isVisible);
  const [shouldRender, setShouldRender] = React.useState(props.isVisible);

  React.useEffect(() => {
    if (props.isVisible) {
      setShouldRender(true);
    } else {
      setIsExpanded(false);
    }
  }, [props.isVisible]);

  React.useEffect(() => {
    if (shouldRender) {
      setIsExpanded(true);
    }
  }, [shouldRender]);

  React.useEffect(() => {
    if (!isExpanded) {
      // Allow component to animate out, then remove it from the DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
  }, [isExpanded]);

  return shouldRender ? (
    <Wrapper isExpanded={isExpanded}>
      <Stack>
        <Stack flex={true}>
          <InputField name="name" label="Name *" />
          <InputField
            name="muscleGroups"
            label="Muscle groups"
            placeholder="Ex (Upper back, Lats)"
          />
        </Stack>
        <Stack flex={true}>
          <InputField name="description" label="Description" />
          <InputField name="videoUrl" label="Video url" />
        </Stack>
        <Stack flex={true} justify="end">
          <Button submit={true}>Save</Button>
        </Stack>
      </Stack>
    </Wrapper>
  ) : null;
}
