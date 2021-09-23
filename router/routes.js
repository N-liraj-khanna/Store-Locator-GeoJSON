const router=require('express').Router();
const { getStores, addStore } = require('../controller/stores');

// Another simple way to do a get request using controllers
router.route('/').get(getStores).post(addStore);


module.exports = router;