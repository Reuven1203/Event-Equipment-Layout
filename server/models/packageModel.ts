import mongoose, {Schema} from 'mongoose';
import Equipment from './equipmentModel';

const packageSchema = new mongoose.Schema({
    _id: {
    type: Schema.Types.ObjectId,
    required: [true, 'Id is required'],
    unique: true,
    immutable: true,
    },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: false,
  },
  basePrice: {
    type: String,
    required: false,
    trim: true,
  },
  Equipment: [{ type: Schema.Types.ObjectId, ref: 'Equipment' }],
});

const Package = mongoose.model('Package', packageSchema);
export default Package;