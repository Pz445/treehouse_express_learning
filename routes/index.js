const express = require('express');
const router = express.Router();

const names = [
  { firstName: "James", lastName: "Smith" },
  { firstName: "Bill", lastName: "Jones" },
  { firstName: "Linda", lastName: "Langerhans" },
  { firstName: "Mike", lastName: "Gant" },
  { firstName: "Ozzie", lastName: "Maddux" }
]

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if(!name) {
    return res.redirect('/hello');
  }
  res.render('index', { name: name });
});


router.get('/hello', (req, res) => {
  res.render('hello')
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

router.get('/sandbox', (req, res) => {
  res.render('names', { names })
});


module.exports = router;
