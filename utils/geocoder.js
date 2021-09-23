const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER || "mapquest",
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY || "YSfK1TEF4fRTXQnkvSc1Z6iHrGaX3Vej",
  formatter: null
};
const geocoder = NodeGeocoder(options);

module.exports = geocoder;