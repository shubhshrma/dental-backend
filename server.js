// server.js
// where your node app starts

// init project

const express = require('express')
const app = express()
var path = require('path');
var env = require('dotenv');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var config = require('./config.js')
var cors = require('cors')
var Institute = require('./models/institutes');
var Treatment = require('./models/treatment');
var Country = require('./models/country');
var InstituteTreatment = require('./models/instiTreatments');
var User = require('./models/user');
const multer = require('multer');


mongoose.connect('mongodb://root:dentalrootuser@ds239029.mlab.com:39029/dental',function(err){
if(err){
  console.log(err);
}
  console.log("connected to mongodb")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// http://expressjs.com/en/starter/static-files.html
app.use(cors())
app.use(express.static('public'))
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})
// Simple in-memory store
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
]

app.get("/dreams", (request, response) => {
  response.send(dreams)
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})



// // Set The Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Init Upload
// const upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000000000},
//   fileFilter: function(req, file, cb){
//     checkFileType(file, cb);
//   }
// }).single('img');

// // Check File Type
// function checkFileType(file, cb){
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if(mimetype && extname){
//     return cb(null,true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

app.post("/new_institute", function(req, res){
	
 // upload(req, res, (err) => {
 //    if(err){
 //      res.json({
 //        msg: err
 //      });
 //    } else {
 //      if(req.file == undefined){
 //        res.json( {
 //          msg: 'Error: No File Selected!'
 //        });
 //      } else {
        var new_institute = new Institute({
          country_name:     req.body.country_name,
          institute_name: 	req.body.name,
          institute_desc: 	req.body.desc,
          institute_web:  	req.body.website,
          institute_email:  req.body.email,
          institute_contact: req.body.contact,
          institute_img :   req.body.image
	      });
        new_institute.save(function(err, institute){
          if(err) throw err;
          console.log("new institute created ", institute)
          res.json({
          success: "new institute created"
          })
        });
      }
    
);
	


app.get("/available_treatments", function(req, res){
	Treatment.find({}, function(err, treatments){
		if(err) throw err;
		res.json({
			data: treatments
		});
	})
})

app.get("/available_countries", function(req, res){
	Country.find({}, function(err, countries){
		if(err) throw err;
		res.json({
			data: countries
		})
	})
})

app.get("/single_institute", function(req, res){
	Institute.findOne({name: req.query.institute_id}, function(err, institute){
		if(err) throw err;
		res.json({
			response: institute
		});
	})
})

app.get("/institute_by_preference", function(req, res){
  console.log(req.query.country_name);
	Institute.find({country_name: req.query.country_name}, function(err, institutes){
		if(err) throw err;
    console.log(institutes)
		res.json({
			data: institutes
		});
	})
})

app.get("/average_cost", function(req, res){
	InstituteTreatment.find({country_id: req.query.country_id, treatment_id: req.query.treatment_id}, function(err, cost){
		if(err) throw err;
		res.json({
			cost: cost
		})
	})
})

app.post("/new_treatment", function(req, res){
  new Treatment({
    treat_name: req.body.treat_name,
    treat_description: req.body.treat_desc,
    treat_img: req.body.treat_img
    
  }).save(function(err, treatment){
    if(err) throw err;
    res.json({
      success: "treatment added"
    })
  })
})

app.post("/new_country", function(req, res){
  new Country({
    country_name: req.body.country_name,
    country_description: req.body.country_desc,
    country_img: req.body.country_img
    
  }).save(function(err, treatment){
    if(err) throw err;
    res.json({
      success: "country added"
    })
  })
})

