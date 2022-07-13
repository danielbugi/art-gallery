const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.set('views', './src/views')
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/gallery', (req, res) => {
    res.render('gallery');
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.listen(3000, () => {
    console.log("LISTENING ON 3000!!!");
})

