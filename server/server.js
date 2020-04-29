const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const router = express.Router();
const port = process.env.PORT || 8000
const upload = require('./middleware/multer.js');
const db = require('./config/db.js');
const Users = require('./routes/Users')

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

global.__basedir = __dirname;
 
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/users", Users)
app.use(express.static('resources'));	

require('./routes/file.router.js')(app, router, upload);
require('./routes/form.router.js')(app, router);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})