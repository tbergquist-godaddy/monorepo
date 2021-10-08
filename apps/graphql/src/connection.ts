import mongoose from 'mongoose';

export const tvHelperConnection = mongoose.createConnection();
export const storedOperationConnection = mongoose.createConnection();

mongoose.set('debug', false);
