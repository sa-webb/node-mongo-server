const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            identifyBy: req.body.identifyBy,
            description: req.body.description
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.product_get_products = function (req, res) {
    Product.find(req.params.id, function (err, docs) {
        if (err) next(err);
      res.status(200).send(docs);
    })
};


