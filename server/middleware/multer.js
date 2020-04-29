const multer = require('multer');
var maxSize = 1 * 1000 * 1000

var storage = multer.memoryStorage()
var upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize
  }
});

module.exports = upload;