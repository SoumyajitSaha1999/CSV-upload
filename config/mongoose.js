const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://ssoumyajit245:avoyo3xtTwV2vOz6@cluster0.emhu7dr.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));

db.once('open',function(){
  console.log("Connection was Successful on mongoose");
});

module.exports=db;