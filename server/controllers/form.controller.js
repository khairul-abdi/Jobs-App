const db = require('../config/db.js')
const Form = db.form

exports.init = (req, res) => {
  Form.create({
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    letter: req.body.letter
  }).then((form) => {
    console.log('>> Created Form : ' + JSON.stringify(form, null, 4))
    res.send('Done>>>>>>')
  }).catch((err) => {
    console.log('>> Error while creating form: ' + err)
  })
}

exports.findAll = (req, res) => {
  Form.findAll()
  .then((form) => {
    res.send(form)
  }).catch(err => {
    res.status(500).send({
      message: 
      err.message || "some error occured while retrieving form"
    })
  })
}