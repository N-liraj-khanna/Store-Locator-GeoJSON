const Store=require('../models/Stores')


// @desc Get all stores
// @route: GET /api/v1/stores
// @access: public 
exports.getStores = async (req, res, next) => {
  try{
    const store = await Store.find();
    return res.status(200).json({
      success: true,
      count: store.length,
      data: store
    });
  }catch(err){
    console.error(err);
    return res.status(500).json({ status: 500, error: err.message });
  }
};


// @desc Add stores
// @route: POST /api/v1/stores
// @access: public 
exports.addStore = async (req, res, next) => {
  try{
    const {storeId, address} = req.body;
    const store=await Store.create({
      storeID: storeId,
      address: address,
    });
    console.log(store);
    // return res.status(200).json({
    //   success: true,
    //   data: store
    // });
    return res.redirect('/');
  }catch(err){
    if(err.code===11000){
      return res.status(400).json({ status: 500, error: err.message });
    }
    console.error(err);
    return res.status(500).json({ status: 500, error: err.message });
  }
};