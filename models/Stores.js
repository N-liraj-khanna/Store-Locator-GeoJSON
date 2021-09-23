const mongoose=require('mongoose');
const geocoder=require('../utils/geocoder');


const StoresSchema = new mongoose.Schema({
  storeID: {
    type: String,
    unique: true,
    required: [true, 'Please provide a Store ID'],
    trim: true,
    maxlength: [10, 'Store ID must be less than 10 characters']
  },
  address: {
    type: String,
    required: [true, 'Please provide an Address'],
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

StoresSchema.pre('save', async function(next){
  const loc=await geocoder.geocode(this.address);
  this.location={
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  }
  this.address=undefined;
  next();
});

module.exports = mongoose.model('Store', StoresSchema);