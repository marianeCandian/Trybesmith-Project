import mysql from 'mysql2/promise';

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

export default mysql.createPool({
  host: MYSQL_HOST || 'localhost',
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
});