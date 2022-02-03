const productModel = require('../models/product')

class ProductController {
  get(req, res) {
    const filter = req.query.info
    let queryFilterOption = []

    if (filter) {
      queryFilterOption = filter.map((item) => { return { "$elemMatch": JSON.parse(item) } })
    } else {
      queryFilterOption = [{ "$elemMatch": {} }]
    }

    productModel.find({
      name: { $regex: req.query.name, $options: 'i' },
      info: { $all: queryFilterOption }
    }, (err, products) => {
      err && res.status(500).send(err, req)
      res.send(products)
    });
  }
  create(req, res) {
    const product = new productModel(req.body)
    product.save((err) => {
      err && res.status(500).send(err)
      res.status(201).send(product)
    })
  }
}

module.exports = new ProductController()