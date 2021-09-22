const router=require('express').Router();
const { getStores } = require('../controller/stores');

// Another simple way to do a get request using controllers
router.route('/').get(getStores);

module.exports = router;