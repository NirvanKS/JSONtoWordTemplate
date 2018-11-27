var express = require('express')
var app = express()
app.use(express.json());
var port = process.env.PORT || 3000;
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })


app.listen(port);
console.log('Server started! At http://localhost:' + port);
//don't forget to use nodemon to start the app and livereload.

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});
