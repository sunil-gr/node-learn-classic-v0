const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set up EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

const sessionRoutes = require('./routes/session');
const serverVariableRoutes = require('./routes/server-variable');
const sendingContentRoutes = require('./routes/sendingcontent');
const filesystemRoutes = require('./routes/filesystem');
const formsRoutes = require('./routes/forms');
const databaseRoutes = require('./routes/database');
const basicsRoutes = require('./routes/basics');

app.use('/session', sessionRoutes);
app.use('/server-variable', serverVariableRoutes);
app.use('/sendingcontent', sendingContentRoutes);
app.use('/filesystem', filesystemRoutes);
app.use('/forms', formsRoutes);
app.use('/database', databaseRoutes);
app.use('/basics', basicsRoutes);

// Default route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 