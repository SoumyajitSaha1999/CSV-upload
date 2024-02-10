const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://ssoumyajit245:j8gRbubviHY2P3S8@cluster0.he7clva.mongodb.net/CSVUpload02?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));

db.once('open',function(){
  console.log("Connection was Successful on mongoose");
});

module.exports=db;