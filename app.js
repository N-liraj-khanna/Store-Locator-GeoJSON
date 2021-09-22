/*********************************** Import ***********************************/
const express=require('express');
const path=require('path');
const cors=require('cors');
const dotenv=require('dotenv');
const routes=require('./router/routes');
const connectDB=require('./config/db');

/*********************************** Config ***********************************/
// Load variables in env file
dotenv.config({path: './config/config.env'});
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


/*********************************** Routes ***********************************/



/*********************************** General ***********************************/
app.listen(PORT, () =>{
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});