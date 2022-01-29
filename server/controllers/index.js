const productModel = require('../models/product')

class ProductController {
  get(req, res) {
    productModel.find({ name: req.body.name }, (err, products) => {
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
}

module.exports = new ProductController()