const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
// load config
dotenv.config({ path: './config/config.env' });
// connect mongo
connectDB(process.env.MONGO_URI);

const app = express();
app.use(bodyParser.json());
// routes
app.use('/', require('./routes'));

// for Heroku Deployment
if (process.env.NODE_ENV === 'production') {
  // make sure express will serve up prod assets
  app.use(express.static(path.join(__dirname, '/client/build')));
  // express will serve up index.html file if it doesn't know the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
