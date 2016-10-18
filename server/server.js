const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./client'));
app.use('/client', express.static('./node_modules'));

app.get('*', (req,res) => {
  res.sendFile(path.resolve('./', 'client', 'index.html'));
});

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log('Server is now listening on port: ', app.get('port'));
});
