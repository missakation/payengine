var express = require('express');

var UserService = require('../services/users-service')
var router = express.Router();

/* GET user by Id. */
router.get('/:id', async (req, res, next) => {
  const result = await UserService.getUserById(req.params.id);
  res.send(result);
});


module.exports = router;
