import { Box } from '@tbergq/components';

type Props = {
  url: string;
  summary: string;
};

export default function ImageSummary({ url, summary }: Readonly<Props>): JSX.Element {
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
        <img src={url} alt="TODO" />
      </Box>
      <Box flex="1" dangerouslySetInnerHTML={{ __html: summary }} />
    </Box>
  );
}
