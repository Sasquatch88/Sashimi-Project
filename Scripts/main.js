const requirejs = require('requirejs');
requirejs.config({nodeRequire: require});
const express = require('express');
const mongoose = require('mongoose');

const sashi = express();

sashi.get("/", function(request, response) {
    response.send(...index.html);
});

sashi.listen(8080, function() {
    console.log("Server started on port 8080");
});

mongoose.connect("mongodb://localhost:27017/sashimiDB",  { useNewUrlParser: true, useUnifiedTopology: true });

const productsSchema = new mongoose.Schema ( {
    _id: Number,
    ean: Number,
    title: String,
    author: String,
    publisher: String,
    year: Number,
    pgsqty: Number,
    coverType: String,
    price: Number,
    oldPrice: Number,
    rating: Number,
    desc: String,
    review: String,
    qty: Number,
    sold: Number,
    available: Boolean
});

const Product = mongoose.model("Product", productsSchema);

const P42974900208 = new Product ({
    _id: 1,
    ean: 42974900208,
    title: "Dune",
    author: "Frank Herbert",
    publisher: "Prószyński & S-ka",
    year: 2018,
    pgsqty: 718,
    coverType: "miękka",
    price: 26.89,
    oldPrice: 39.99,
    rating: 4.3,
    desc: "Pustynna odyseja",
    review: "Jedna z najlepszych pozycji s-f, poszerzająca wyobraźnię do granic możliwości",
    qty: 29,
    sold: 67,
    available: true
});

P42974900208.save();

console.log(P42974900208);

const $ = function (id) {return document.getElementById(id);}

const papa = $('papa');

console.log(papa.innerHTML);

papa.innerHTML = P42974900208.eventNames;



// console.log(P42974900208);