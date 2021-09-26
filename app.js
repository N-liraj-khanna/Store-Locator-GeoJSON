/*********************************** Import ***********************************/
const express=require('express');
const path=require('path');
const cors=require('cors');
const routes=require('./router/routes');
const connectDB=require('./config/db');

/*********************************** Config ***********************************/
// Load variables in env file
require('dotenv').config({ path: path.resolve(__dirname, 'config', 'config.env') });

// Starting connection in DB
connectDB();

/*********************************** Constants ***********************************/
const PORT = process.env.PORT || 5000;
const app=express();


/*********************************** Middlewares ***********************************/
// Body Parser
app.use(express.json());

// Enable Cors
app.use(cors());

// configure routes file
app.use('/api/v1/stores', routes);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

/*********************************** Routes ***********************************/



/*********************************** General ***********************************/
app.listen(PORT, () =>{
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${process.env.PORT}`);
});