var axios = require('axios');
const knex = require('../db/ormConfig')

exports.createMerchandise = async (userId, merchandiseId) => {
    var data = {
        external_id: "1",
        email: "service-tital@live.com",
        name: "Service Titan"
    };

    var config = {
        method: 'post',
        url: 'https://console.payengine.dev/api/merchant',
        headers: {
            'Authorization': `Basic ${process.env.PAYENGINE_PRIVATE_KEY}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    const result = await axios(config);

    return result.data;
}