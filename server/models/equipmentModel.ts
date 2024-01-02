import mongoose, {Schema} from 'mongoose'

const equipmentSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: [true, 'Uid is required'],
    trim: true,
    unique:false
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: false,
  },
  description: {
    type: String,
    required: false,
    trim: false,
  },
  price: {
    type: String,
    required: false,
    trim: true,
  },
  picture: {
    type: String,
    required: [true, 'Picture is required'],
    trim: true,
  },
  isExtra: {
    type: Boolean,
    required: [true, 'isExtra is required'],
    trim: true,
  },
});



const Equipment = mongoose.model('Equipment', equipmentSchema);
export default Equipment;