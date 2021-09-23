import { Box } from '@tbergq/components';
import { graphql, useFragment } from 'react-relay';
import { imageSummary$key } from '__generated__/imageSummary.graphql';

type Props = {
  alt: string;
  dataRef: imageSummary$key | null | undefined;
};

export default function ImageSummary({ dataRef, alt }: Readonly<Props>): JSX.Element {
  const data = useFragment(
    graphql`
      fragment imageSummary on ImageSummary {
        image {
          medium
        }
        summary(stripTags: false)
      }
    `,
    dataRef,
  );
  return (
    <Box
      display="flex"
      paddingY="xxxLarge"
      gap="increased"
      flexDirection={{
        mediumMobile: 'column',
        tablet: 'row',
      }}
    >
      <Box position="relative">
        <img src={data?.image?.medium} alt={alt} />
      </Box>
      <Box flex="1" dangerouslySetInnerHTML={{ __html: data?.summary }} />
    </Box>
  );
}
