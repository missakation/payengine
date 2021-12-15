const knex = require('../db/ormConfig')

exports.updateUserMerchantId = async (userId, merchandiseId, merchandiseHash) => {
  try {
    await knex('users')
      .where('id', '=', userId)
      .update({
        merchandise_id: merchandiseId,
        merchandise_hash: merchandiseHash
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
    }).first().select('id', 'name', 'merchandise_id', 'merchandise_hash')
    return user;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error(e.message);
  }
}