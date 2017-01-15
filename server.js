const express = require('express');
const mongoose = require('mongoose').set('debug', true);
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', routes);

mongoose.connect('mongodb://localhost/reddit');

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
})
db.once('open', function() {
  console.log('Mongoose connection successful');
})
app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
