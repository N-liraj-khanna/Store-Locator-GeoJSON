const router=require('express').Router();
const { getStores } = require('../controller/stores');

router.route('/').get(getStores);

module.exports= router;