const express = require("express");
const router = express.Router();
const {createExchange,getAllExchange,searchExchange} = require('../controllers/exchangeCtrl')


router.route('/createExchange').post(createExchange)
router.route('/getAllExchange').get(getAllExchange)
router.route('/searchExchange').get(searchExchange)
module.exports = router;
