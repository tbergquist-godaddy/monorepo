import styled from 'styled-components';
import { Spinner } from '@tbergq/components';

const Loader = styled.div({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 100,
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderRadius: '6px',
  padding: '8px',
  transform: 'translate(-50%, -50%)',
});

const FavoritesLoader = () => (
  <Loader>
    <Spinner dataTest="tableLoader" />
  </Loader>
);

export default FavoritesLoader;
