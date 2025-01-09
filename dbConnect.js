const mongoose = require('mongoose'); // Correct module name

mongoose.connect(
  'mongodb+srv://rithika:Qaz%40906@cluster0.a0qrb.mongodb.net/Expense_tracker',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err)); // Handle connection errors
connection.on('connected', () => console.log('MongoDB Connection Successful')); // Successful connection message
