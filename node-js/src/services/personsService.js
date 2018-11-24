// get, post, aggregate
'use strict';

module.exports = {
    getDbConnectionHealth: async (url, client) => {
        try {
        const db = client.db('admin');
         return new Promise((resolve, reject) => db.collection('test').findOne({}, (err) => {
                if (err == null) {
                    return resolve({ status: 'OK' });
                }
                else {
                    return reject(err);
                }
            }));
        } catch (err) {
            console.log(err);
            return { status: 'DOWN' };
        }
    }
}
