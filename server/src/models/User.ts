import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const UserModel = mongoose.model('user', UserSchema);
export default interface User {
  id: string,
  username: string,
  password: string
};