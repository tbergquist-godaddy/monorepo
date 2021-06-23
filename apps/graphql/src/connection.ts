import mongoose from 'mongoose';

export const tvHelperConnection = mongoose.createConnection();

mongoose.set('debug', false);
