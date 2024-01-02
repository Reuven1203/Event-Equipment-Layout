import mongoose, {Schema} from 'mongoose';
import Package from './packageModel';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
  },
    industryName: {
    type: String,
    required: [true, 'Industry name is required'],
    trim: false,
    },
  Packages: [{ type: Schema.Types.ObjectId, ref: 'Package' }],
});

const User = mongoose.model('User', userSchema);
export default User;