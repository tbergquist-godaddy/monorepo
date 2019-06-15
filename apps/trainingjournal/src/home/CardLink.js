// @flow

import * as React from 'react';
import {
  Card,
  CardSection,
  CardSectionContent,
  Link,
} from '@tbergq/components';

type Props = {|
  +href: string,
  +children: React.ChildrenArray<React.Node> | React.Node,
|};

export default function CardLink(props: Props) {
  return (
    <Link href={props.href}>
      <Card>
        <CardSection>
          <CardSectionContent>{props.children}</CardSectionContent>
        </CardSection>
      </Card>
    </Link>
  );
}
