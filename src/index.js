const express = require('express');
const config = require('./server/config');
//database
require('./database');
const app = config(express());
//Starting the server

app.listen(app.get('port'), () => {
  console.log('Server on Port', app.get('port'));
});
