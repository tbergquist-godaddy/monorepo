import { Box, Container, Text, Image } from '@chakra-ui/react';
import { Trans } from 'next-i18next';

import LanguagePicker, { LanguagePickerProps } from './language-picker';

export default function Navbar(props: LanguagePickerProps): JSX.Element {
  return (
    <Box bg="green.600">
      <Container maxW="container.xl">
        <Box>
          <Box py="8" display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex">
              <Image
                boxSize="30px"
                objectFit="cover"
                src="https://via.placeholder.com/30"
                alt="logo"
                borderRadius="full"
                mr="2"
              />
              <Text fontSize="lg" color="white">
                <Trans i18nKey="common:navbar.brand">Handball news</Trans>
              </Text>
            </Box>
            <Box>
              <LanguagePicker {...props} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
