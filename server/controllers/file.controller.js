const db = require('../config/db.js');
const File = db.files;

exports.uploadFile = (req, res) => {
	File.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.send('File uploaded successfully! -> filename = ' + req.file.originalname);
	}).catch(e => {
		console.log(e)
	})
}

exports.listAllFiles = (req, res) => {
	File.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	});
}
