var User = require('./userModel')
// var _ = require('loadash')

// exports.params = function(err,req,res,next){
//     User.findById(id).then(function(user){
//         if(!user){
//             next(new Error('No user with that ID'));
//         }else{
//             req.user = user;
//             next();
//         }
//     },function(err){
//         next(err);
//     });
// };

exports.params = function(req,res){
    res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
}


exports.get = function(req,res){
    // logger.log('Testing log in user Rotuer!');
    res.send({ok:true});
};

// exports.getOne = function(err,req,res,next){
//     var User = req.User;
//     res.json(User);
// };

// exports.put = function(err,req,res,next){
//     var User = req.User;
//     var update = req.body;

//     _.merge(User,update);
//     user.save(function(err,saved){
//         if(err){
//             next(err);
//         }else{
//             res.json(saved);
//         }
//     })
// };


// exports.delete = function(err,req,res,next){
//     req.user.remove(function(err,removed){
//         if(err){
//             next(err);
//         }else{
//             res.json(removed);
//         }
//     });
// };