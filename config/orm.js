const connection = require('./connection.js');

const orm = {
    //SELECT * FROM burgers;
    selectAll: (tableInput, cb) => {
        let queryString = 
        `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //INSERT INTO burgers ('burger_name') VALUES ('random burger');
    insertOne: (tableInput, colName, insertValue, cb) => {
        let queryString = 
        `INSERT INTO ${tableInput} (${colName})
        VALUES ('${insertValue}');`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //UPDATE burgers SET 'devoured' = true WHERE id = burgerId;
    updateOne: (tableInput, colName, colValue, id, rowValue, cb) => {
        let queryString = 
        `UPDATE ${tableInput}
        SET ${colName} = ${colValue}
        WHERE ${id} = ${rowValue};
        `;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};
//exports to burger.js
module.exports = orm;