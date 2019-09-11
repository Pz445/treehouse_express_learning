const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const names = [
  { firstName: "James", lastName: "Smith" },
  { firstName: "Bill", lastName: "Jones" },
  { firstName: "Linda", lastName: "Langerhans" },
  { firstName: "Mike", lastName: "Gant" },
  { firstName: "Ozzie", lastName: "Maddux" }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if(!name) {
    return res.redirect('/hello');
  }
  res.render('index', { name: name });
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?" });
});

app.get('/hello', (req, res) => {
  res.render('hello')
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
})

app.get('/sandbox', (req, res) => {
  res.render('names', { names })
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
});
