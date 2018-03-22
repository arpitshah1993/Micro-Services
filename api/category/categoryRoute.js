var router = require('express').Router();
var categoryController = require('./categoryController');

// var logger = require('../../util/logger');

// router.get('/id',categoryController.params)

router.get('/',categoryController.get);

router.post('/addcat',categoryController.postCategory);



// router.get('/:id',categoryController.params);



// router.route('/:id').get(categoryController.getOne)
// //.put(categoryController.updateOne)
// //.delete(categoryController.createOne)

// router.route('/put').get(categoryController.put)

module.exports = router;