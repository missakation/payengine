var express = require('express');
// import { environment } from "../environments/environment.development.js"
var UserService = require('../services/users-service')
var ExternalService = require('../services/external')
var router = express.Router();


router.post('/', async (req, res, next) => {
  const merchandise = await ExternalService.createMerchandise()
  console.log(merchandise);
  await UserService.updateMerchantId(1, "33333");
  res.send(merchandise);

});

module.exports = router;
