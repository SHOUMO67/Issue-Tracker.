const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shoumodip:shoumo@cluster0.scxf24d.mongodb.net/?retryWrites=true&w=majority');

// mongoose.connect('mongodb://127.0.0.1:27017/Issue-Tracker');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('Successfully Connected to the Database : MongoDB');
});

module.export = db;
