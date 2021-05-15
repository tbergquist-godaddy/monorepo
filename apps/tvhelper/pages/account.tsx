import AccountScene from 'account/AccountScene';
import makeGetServerSideProps from 'services/get-serverside-props';

export default function Account() {
  return <AccountScene />;
}

export const getServerSideProps = makeGetServerSideProps({
  pageName: 'Account',
});
