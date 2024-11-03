const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = ["pen","pencil","pen pencil","box","paper"];
    res.render('index', { items });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});