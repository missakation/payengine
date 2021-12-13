const knex = require('../db/ormConfig')

exports.updateMerchantId = async (userId, merchandiseId) => {
  try {
    await knex('users')
      .where('id', '=', userId)
      .update({
        merchandise_id: merchandiseId
      })
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e.message);
  }
}

exports.getUserById = async (userId) => {
  try {
    const user = knex('users').where({
      id: userId
    }).first().select('id', 'name', 'merchandise_id')
    return user;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e.message);
  }
}