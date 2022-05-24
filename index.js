var express = require('express');
var cors = require('cors');
require('dotenv').config()
let fileUpload = require('express-fileupload')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use(fileUpload({
  createParentPath: true
}));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  const fileName = req.files.upfile.name
  const fileType = req.files.upfile.mimetype
  const fileSize = req.files.upfile.size

  res.json({
    name: fileName,
    type: fileType,
    size: fileSize
  })
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
