const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const bodyParser = require('body-parser');
//what this is going to do is it's going to allow us to pass the information that we get sent from the post request.
app.use(bodyParser.urlencoded({extended:true}));
//whenever you're trying to grab the information that gets posted to your server from an HTML form, you're going to be using urlencoded.
//add an option called ‘extended’, and we're going to set it to be ‘true’. And by setting that extended option to true, that basically just allows us to post nested objects. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare.

app.use(express.static('client/dist'));// express.static:serve static files such as images,css files and JS files. app.use():can load and use the files that are in static files
app.get('/aaa',function(request,response){
  //response.writeHead();
  res.set('Content-Type', 'text/plain');
  res.set('Access-Control-Allow-Origin', '*');
  response.send("asd");
});
app.post('/',function(request,response){

  response.send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});