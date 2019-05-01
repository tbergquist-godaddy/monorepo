// @flow

import * as React from 'react';
import { Card, CardSection, CardSectionContent } from '@tbergq/components';
import Link from 'next/link';

type Props = {|
  +href: string,
  +children: React.ChildrenArray<React.Node> | React.Node,
|};

export default function CardLink(props: Props) {
  return (
    <Link href={props.href}>
      <a>
        <Card>
          <CardSection>
            <CardSectionContent>{props.children}</CardSectionContent>
          </CardSection>
        </Card>
      </a>
    </Link>
  );
}
