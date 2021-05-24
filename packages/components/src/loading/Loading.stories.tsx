import Loader from './Loading';

export const Loading = (): JSX.Element => (
  <div style={{ backgroundColor: 'blue', padding: '40px' }}>
    <Loader />
  </div>
);

export default {
  component: Loader,
  title: 'Loading',
};
