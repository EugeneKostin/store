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
      // Что-то можно здесб придумать
      const info = products.reduce((acc, cur) => { return acc + cur.info }, [])
      res.send(info);
    });
  }
}

module.exports = new ProductController()