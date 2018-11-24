// get, post, aggregate
'use strict';
const faker = require('faker');

module.exports = {
    getDbConnectionHealth: async (client) => {
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
    },
    generatePersons: async (client) => {
        try {
            const db = client.db('admin');
            return new Promise((resolve, reject) => {
                for (let i = 0; i < 10; i++) {
                    db.collection('test').insertOne({ personName: faker.name.findName(), age: Math.floor(Math.random() * 10 + 20) }, (err) => {
                        if (err == null) {
                            return resolve('10 new persons inserted');
                        }
                        else {
                            console.log('An error occured while saving the data', err);
                            return reject(err);
                        }
                    })
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    calculateAggregationTime: async (client) => {
        try {
            const db = client.db('admin');
            const beginTime = new Date().getTime();
            return new Promise((resolve, reject) => {
                db.collection('test').countDocuments({ age: { $gt: 25 } }, (err, result) => {
                    if (err == null) {
                        const endTime = new Date().getTime();
                        return resolve({result: result, aggregationTimeInMs: endTime-beginTime});
                    }
                    if (err != null) {
                        return reject(err);
                    }
                })
            });
        } catch (err) {
            console.log(err);
        }
    }
}
