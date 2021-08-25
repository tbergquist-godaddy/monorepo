import { atoms } from '@tbergq/components';

const formContent = atoms({
  marginTop: 'small',
  display: 'flex',
  flexDirection: {
    mediumMobile: 'column',
    largeMobile: 'row',
  },
  justifyContent: {
    largeMobile: 'flex-start',
  },
  alignItems: {
    largeMobile: 'flex-end',
  },
});

export const classNames = {
  formContent,
  buttonWrapper: atoms({
    alignSelf: 'flex-end',
    marginTop: 'increased',
    width: {
      mediumMobile: '100%',
      largeMobile: 'unset',
    },
  }),
  button: atoms({
    width: {
      mediumMobile: '100%',
      largeMobile: 'unset',
    },
  }),
  label: atoms({
    flex: 1,
    marginRight: {
      largeMobile: 'increased',
    },
  }),
};
