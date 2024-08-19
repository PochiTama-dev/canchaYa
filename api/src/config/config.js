// src/config/config.js
import { Sequelize } from 'sequelize';

const databaseName = 'canchaya_db';
const username = 'root';
const password = '';

const sequelize = new Sequelize(databaseName, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default sequelize;
