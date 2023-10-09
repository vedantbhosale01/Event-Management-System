const BigPromise = require('../middlewares/bigPromise')
const Product = require('../models/product')
const CustomError = require('../utils/customErrors')
const cloudinary = require('cloudinary')


exports.addProduct = async (req, res, next) => {
    // images
  try {
    
    let result ;
    if(req.files){
        let file = req.files.photo
        result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: "products",
        })
    }

    const {title, description, purpose, organizers, topics, speaker, } = req.body

   
    const product = await Product.create({
       title,
       description, 
       purpose, 
       organizers,
       speaker,
       topics,
        photo:{
            id: result.public_id,
            secure_url: result.secure_url,
        }
    })
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
  }
  };

exports.getAllProducts = BigPromise(async(req, res, next) => {

    const products = await Product.find({})

    res.status(200).json(products)
})

exports.getOneProduct = BigPromise(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new CustomError("No product found with this id", 401));
    }
    res.status(200).json(product);
  });
  