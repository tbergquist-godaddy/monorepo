// @flow strict

const activeBoxShadow = '0 0 0 0.2rem';
const active = {
  backgroundSize: '100%',
  transition: 'background 0s',
};

export type ThemeColors = $ReadOnly<{
  backgroundColor: string,
  borderColor: string,
  color: string,
  ':focus': {
    boxShadow: string,
  },
  ':active': {
    backgroundSize: string,
    transition: string,
    backgroundColor: string,
  },
}>;

export default {
  small: {
    fontSize: '12px',
    padding: '8px 16px',
  },
  normal: {
    fontSize: '14px',
    padding: '12px 22px',
  },
  large: {
    fontSize: '16px',
    padding: '14px 26px',
  },
  primary: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: '#fff',
    ':focus': {
      boxShadow: `${activeBoxShadow} rgba(38,143,255,.5)`,
    },
    ':active': {
      ...active,
      backgroundColor: '#6eb9f7',
    },
  },
  secondary: {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    color: '#fff',
    ':focus': {
      boxShadow: `${activeBoxShadow} rgba(119,124,129,.5);`,
    },
    ':active': {
      ...active,
      backgroundColor: '#88a1b6',
    },
  },
  danger: {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: '#fff',
    ':focus': {
      boxShadow: `${activeBoxShadow} rgba(225,83,97,.5);`,
    },
    ':active': {
      ...active,
      backgroundColor: '#ef707c',
    },
  },
};
