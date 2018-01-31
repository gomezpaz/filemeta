
// init project
var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.use(express.static('public'))

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
})

// Get file
app.post("/fileupload", upload.single("filetoupload"), function(req, res) {
  // Return size of file
  if(!req.file)
    res.send({ size: null })
  else
    res.send({ size: req.file.size })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})

