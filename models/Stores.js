const mongoose=require('mongoose');

const StoresSchema = new mongoose.Schema({
  storeID: {
    type: String,
    unique: true,
    required: [true, 'Please provide a Store ID'],
    trim: true,
    maxlength: [10, 'Store ID must be less than 10 characters']
  },
  location:  {
    type: {
      type: String, 
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }, 
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Store', StoreSchema);