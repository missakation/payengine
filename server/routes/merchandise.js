var express = require('express');
// import { environment } from "../environments/environment.development.js"
var UserService = require('../services/users-service')
var ExternalService = require('../services/external-service')
var router = express.Router();
const crypto = require("crypto");

// Defining key
const secret = 'PENGY64';

router.post('/', async (req, res, next) => {
  const merchandise = await ExternalService.createMerchandise();
  const merchandiseId = merchandise.data.id;

  const hash = crypto.createHmac(
    "sha256",
    secret
  ).update(merchandiseId).digest("hex")

  await UserService.updateUserMerchantId(1, merchandiseId, hash);
  res.send({
    ...merchandise.data,
    hash: hash
  });

});

module.exports = router;
