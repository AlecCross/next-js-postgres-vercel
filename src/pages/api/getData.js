// pages/api/getData.js

import connectAndQuery from '../../utils/database';

export default async function handler(req, res) {
    try {
        const data = await connectAndQuery('SELECT * FROM categories'); // Виконати запит на вибірку даних з таблиці категорій
        res.status(200).json(data);
    } catch (error) {
        console.error("Internal server error", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
