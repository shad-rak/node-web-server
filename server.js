const express = require('express');

var app = express();
//http route handlers
//for a get request
app.get('/', (req, res) => {
//res.send('<h1>Hello Express!</h1>');
//Auto converts to JSON
res.send({
  name: 'Shad',
  likes: ['VR', 'pistols']
})
});
app.get('/about', (req, res) => {
  res.send('About Page')
})

// /bad - send json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errrMessage: 'Unable to handle request'
  })
})

app.listen(3000);
