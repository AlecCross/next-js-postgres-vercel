// utils/database.js

const { Client } = require('pg');
require('dotenv').config(); // Завантаження змінних оточення з .env файлу

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

async function connectAndQuery(query) {
    try {
        await client.connect();
        console.log("Connected to database");

        const res = await client.query(query); // Виконати переданий запит
        return res.rows; // Повернути результати запиту

    } catch (err) {
        console.error("Error connecting to database", err);
        throw err; // Прокидати помилку далі
    } finally {
        await client.end(); // Завершити з'єднання з базою даних
        console.log("Disconnected from database");
    }
}

module.exports = connectAndQuery;

