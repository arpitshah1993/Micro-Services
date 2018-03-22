var UserData = require('./UserdataModel')
var _ = require('loadash')

exports.params = function(err,req,res,next){
    UserData.findById(id).then(function(userData){
        if(!userData){
            next(new Error('No UserData with that ID'));
        }else{
            req.userData = userData;
            next();
        }
    },function(err){
        next(err);
    });
};

exports.get = function(err,req,res,next){
    UserData.find({})  // or we can use .find({}).populate('author UserDatas').exec().then()
    .then(function(userDatas){
        res.json(userDatas);
    },function(err){
        next(err);
    });
};

exports.getOne = function(err,req,res,next){
    var UserData = req.UserData;
    res.json(UserData);
};

exports.put = function(err,req,res,next){
    var UserData = req.UserData;
    var update = req.body;

    _.merge(UserData,update);
    userData.save(function(err,saved){
        if(err){
            next(err);
        }else{
            res.json(saved);
        }
    })
};


exports.delete = function(err,req,res,next){
    req.userData.remove(function(err,removed){
        if(err){
            next(err);
        }else{
            res.json(removed);
        }
    });
};