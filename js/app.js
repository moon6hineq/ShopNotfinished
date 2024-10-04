// const express = require('express');
// const app = express();
// const db = require('./db.js');

// app.get('/', (req, res) => {
//     db.all('SELECT * FROM таблица', (err, rows) => {
//         if (err) {
//             res.status(500).send('Ошибка при получении данных из БД');
//             return;
//         }
//         res.json(rows);
//     });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// });