import mysql from 'mysql';
import dotenv from 'dotenv';
import path from 'path';

dotenv.load({
  path: path.join(__dirname, '../../.env')
})

const poolCluster = mysql.createPool({
  "host"				: process.env.DB_HOST,
  "user"				: process.env.DB_USER,
  "password"			: process.env.DB_PASSWORD,
  "database"			: process.env.DB_DATABASE,
  "connectionLimit"	: 30,
  "queueLimit"		: 60,
  "acquireTimeout"	: 1000000
});

export const execute = (qs, callback) => {
  poolCluster.getConnection(function(err, connection) {
    if(err) {
      // cb(err, null);
      throw err;
      console.log('db error');
      connection.release();
      process.exit(1);
    }
    else {
      connection.query(qs.build().returnString(), function (err, rows) {
        connection.release();
        console.log(String(qs).inverse);
        if(err) {
          callback(err, null);
          console.error(String(err).red);
        }
        else {
          console.log("SUCCESS !".green);
          callback(null, rows);
        }
      });
    }
  });
};
