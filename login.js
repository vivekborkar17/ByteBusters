const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// In a real application, you would connect to a database to verify user credentials.
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // In a real application, validate user credentials against the database.
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('Login successful');
    } else {
        res.send('Login failed. Check your credentials.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
