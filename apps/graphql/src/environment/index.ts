const { NODE_ENV } = process.env;

export const __DEV__ = NODE_ENV !== 'production';
