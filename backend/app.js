const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const app = express()

//const connectionStr = "mongodb://localhost:27017/myapp";
const connectionStr = "mongodb+srv://admin:admin@cluster0.d1cgu.mongodb.net/db?retryWrites=true&w=majority";

let storage = new GridFsStorage({
  url: connectionStr,
  file: (req, file) => {
    return new Promise(
      (resolve, reject) => {
          const fileInfo = {
          filename: file.originalname,
          bucketName: "imageUpload"
        }
        resolve(fileInfo)
      }
    )
  }
})
const upload = multer({ storage });

mongoose.connect(
  connectionStr,
  {
    useNewUrlParser: true
  });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection('imageUpload');
  console.log("Connected to db");
});

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: String,
  content: String,
  fileName: String
});
const Category = mongoose.model('Category', categorySchema);

categorySchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id  }
});

const productSchema = new Schema({
  title: String,
  content: String,
  fileName: String,
  categoryID: String,
  price: String,
  properties: {}
});
const Product = mongoose.model('Product', productSchema);

productSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(cors());

app.get("/categories/:id/products", async function(req, res){
  const list = await Product.find({categoryID: req.params.id});
  const result = list.filter(x => Contains(x.properties, req.query));
  res.send(result);
});

app.get("/categories/:id/attributes", async function(req, res){
  const list = await Product.find({categoryID: req.params.id});
  const result = parseAttributes(list);
  res.send(result);
});

app.get("/products", async function(req, res){
  const list = await Product.find({ properties: req.query});
  res.send(list);
});

app.get("/products/:id/", async function(req, res){
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.post("/products", async function(req, res){
  const record = await Product.create(req.body);
  res.send(record);
});

app.get("/categories", async function(req, res){
  const list = await Category.find();
  res.send(list);
});

app.post("/categories", async function(req, res) {
  const newRequest = await Category.create(req.body);
  res.send(newRequest);
});

app.post("/upload",upload.single("image"),(req,res)=>{
  res.json({file:req.file})
})

app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    //check if files exist
    if (!files || files.length == 0) {
      return res.status(404).json({
        err: "No files exist"
      })
    }
    // files exist
    return res.json(files)
  })
})

app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //check if files exist
    if (!file || file.length == 0) {
      return res.status(404).json({
        err: "No files exist"
      })
    }
    //check if image
    if (file.contentType === 'image/jpeg' || file.contentType === "img/png") {
      //read output to browser
      const readStream = gfs.createReadStream(file.filename)
      readStream.pipe(res)
    } else {
      res.status(404).json({
        err: "Not an image"
      })
    }
  })
})

function parseAttributes(list) {
  const result = {};

  list.forEach(item => {
    const properties = item.properties;
    Object.keys(properties).forEach(function(key) {
      if (!result[key]) {
        result[key] = [properties[key]];
      } else {
        if(!result[key].includes(properties[key])) {
          result[key].push(properties[key]);
        }
      }
    })
  })

  return result;
}

function Contains(target, source) {
  var contains = true;
  Object.keys(source).forEach(key => {
    if(target[key] !== source[key]) {
      contains = false;
    }
  })
  return contains;
}

app.listen(3001);