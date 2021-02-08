const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');
// load config
dotenv.config({ path: './config/config.env' });
// passport config & call function from export
require('./config/passport')();

// connect mongo
connectDB(process.env.MONGO_URI);

const app = express();
// middlewares
app.use(bodyParser.json());
app.use(
  session({
    secret: 'jaguars',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', require('./routes'));
app.use('/auth', require('./routes/auth.js'));

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
