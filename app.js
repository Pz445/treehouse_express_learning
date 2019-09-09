const express = require('express');

const app = express();

const names = [
  { firstName: "James", lastName: "Smith" },
  { firstName: "Bill", lastName: "Jones" },
  { firstName: "Linda", lastName: "Langerhans" },
  { firstName: "Mike", lastName: "Gant" },
  { firstName: "Ozzie", lastName: "Maddux" }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?" });
});

app.get('/sandbox', (req, res) => {
  res.render('names', { names })
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
});
