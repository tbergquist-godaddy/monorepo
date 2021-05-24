import Container from './Container';

export const Default = () => (
  <div style={{ backgroundColor: 'pink' }}>
    <Container>
      <div style={{ backgroundColor: 'white' }}>container child</div>
    </Container>
  </div>
);

export default {
  title: 'Container',
  component: Container,
};
