const productModel = require('../models/product')

class ProductController {
  get(req, res) {
    console.log(req);
    productModel.find({ name: { $regex: req.query.name, $options: 'i' } }, (err, products) => {
      err && res.status(500).send(err);
      res.send(products);
    });
  }
  create(req, res) {
    const product = new productModel(req.body);
    product.save((err) => {
      err && res.status(500).send(err);
      res.status(201).send(product);
    })
  }
  getInfo(req, res) {
    console.log(req);
    productModel.find({}, (err, products) => {
      err && res.status(500).send(err);
      var info = products.map((product) => {
        product.map((info) => {
          return info;
        })
      });
      res.send(info);
    });
  }
}

module.exports = new ProductController()