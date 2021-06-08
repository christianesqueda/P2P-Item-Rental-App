const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models")
const app = express();
const multer = require("multer");
var path = require('path')



var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use('/uploads', express.static("uploads"))
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the DivvyUp application." });
});


require("./app/routes/user.routes")(app);
require('./app/routes/auth.routes')(app);
require("./app/routes/listing.routes")(app);

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"]
  if(!allowedTypes.includes(file.mimetype)){
    const error = new Error("Incorrect file")
    error.code = "INCORRECT_FILETYPE"
    return cb(error, false)
  }
  cb(null, true)
}
let url 
// set port, listen for requests
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    url = file.fieldname + '-' + Date.now()  + path.extname(file.originalname)
    cb(null, url)
  }
})
 
var upload = multer({ storage: storage })

// const upload = multer({
//   dest: "./uploads",
//   fileFilter,
//   limits:  {
//     fileSize: 5000000,
//   }
// });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    file: req.file,
    url: req.protocol + "://"  + req.hostname + ":" + PORT + '/' + 'uploads/' + url,
  })
})

app.use((err, req, res, next) => {
  if (err.code === "INCORRECT_FILETYPE") {
    res.status(422).json({error: "Only images are allowed"})
    return
  }
  if (err.code === "LIMIT_FILE_SIZE"){
    res.status(422).json({error: "allow file size is 500kb"})
    return
  }
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });