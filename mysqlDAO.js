var mysql = require('promise-mysql')

var pool

mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Blue_420',
    database: 'geography',
    insecureAuth: true,
    multipleStatements: true
})
    .then((result) => {
        pool = result
    })
    .catch((error) => {
        console.log(error)
    });

    var getCountries = function () {
        return new Promise((resolve, reject) => {
            pool.query('Select * from country')
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    var getCities = function () {
        return new Promise((resolve, reject) => {
            pool.query('Select * from city')
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    module.exports = { getCountries, getCities}