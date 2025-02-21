const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Раздаем статические файлы фронтенда
app.use(express.static(path.join(__dirname, '../frontend')));

// Пример API endpoint
app.get('/api/time', (req, res) => {
    res.json({ time: Date.now() });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
