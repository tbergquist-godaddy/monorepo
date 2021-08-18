import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): JSX.Element {
  return <div>home</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
