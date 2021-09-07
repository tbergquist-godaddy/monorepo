import { Box, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { Trans } from 'next-i18next';

const locales = {
  en: (
    <>
      <Box marginRight={2}>🇺🇲</Box>
      <Trans i18nKey="common:language.english">English</Trans>
    </>
  ),
  nb: (
    <>
      <Box marginRight={2}>🇳🇴</Box>
      <Trans i18nKey="common:language.norwegian">Norwegian</Trans>
    </>
  ),
};

export type LanguagePickerProps = {
  locale: keyof typeof locales;
};

export default function LanguagePicker({ locale }: Readonly<LanguagePickerProps>): JSX.Element {
  return (
    <Menu>
      <MenuButton backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
        <Box display="flex" as="span">
          {locales[locale]}
        </Box>
      </MenuButton>
      <MenuList>
        <Link href="/" locale="en">
          <MenuItem as="a" href="/">
            {locales.en}
          </MenuItem>
        </Link>
        <Link href="/" locale="nb">
          <MenuItem as="a" href="/">
            {locales.nb}
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
