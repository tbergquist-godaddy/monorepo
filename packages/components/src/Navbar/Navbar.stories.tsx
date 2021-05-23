import Navbar from './Navbar';
import { createMediaStyle, MediaContextProvider } from '../Media';

const Template = (args) => (
  <>
    <Navbar {...args} />
    <div style={{ paddingTop: '60px' }}>test</div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  brand: 'Tbergq',
  headerLeft: [
    <a
      key="link1"
      href="/"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      hoy
    </a>,
    <a
      key="link2"
      href="/"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      ayer
    </a>,
  ],

  headerRight: (
    <a href="/" onClick={(e) => e.preventDefault()}>
      logout
    </a>
  ),
};

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MediaContextProvider>
        <style>
          {` a {
            color: #fff;
            margin-right: 16px;
            text-decoration: none;
          }`}
        </style>
        <style>{createMediaStyle()}</style>
        <Story />
      </MediaContextProvider>
    ),
  ],
};
