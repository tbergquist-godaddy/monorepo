import SignupScene from 'signup/SignupScene';
import makeGetServersideProps from 'services/get-serverside-props';

export default function Signup() {
  return <SignupScene />;
}

export const getServerSideProps = makeGetServersideProps({
  pageName: 'Signup',
});
