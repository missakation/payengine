var express = require('express');
var UserService = require('../services/users-service')
var ExternalService = require('../services/external-service')
var router = express.Router();
const crypto = require("crypto");

router.post('/', async (req, res, next) => {
  const merchandise = await ExternalService.createMerchandise();
  const merchandiseId = merchandise.data.id;

  const hash = crypto.createHmac(
    "sha256",
    process.env.PAYENGINE_PRIVATE_KEY
  ).update(merchandiseId).digest("hex")

  await UserService.updateUserMerchantId(1, merchandiseId, hash);
  res.send({
    ...merchandise.data,
    hash: hash
  });

});

module.exports = router;
