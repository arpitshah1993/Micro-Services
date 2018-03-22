var router = require('express').Router();
var userController = require('./userController');
// var logger = require('../../util/logger');

// router.route('/').get(function(req,res){
//     // logger.log('Testing log in user Rotuer!');
//     res.send({ok:true});
// })

router.get('/',userController.get);

router.get('/:id',userController.params);

module.exports = router;