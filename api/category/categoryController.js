var Category = require('./categoryModel');


//https://evdokimovm.github.io/javascript/nodejs/mongodb/expressjs/2016/07/17/Connect-Save-and-Find-Data-in-MongoDB-with-NodeJS-and-ExpressJS.html

exports.get = function(req,res){
    // logger.log('Testing log in user Rotuer!');
    
    res.sendFile(__dirname + "/category.html");
    // res.send({ok:true});
};

exports.postCategory = function(req,res){    
    console.log("testing");
    // var db2 = db.useDb('categories');    
    // console.log(req.body);
    var mydata = new Category(req.body);    
    // var modelSaved = db2.model('Model2',mydata);

    console.log(mydata.firstName);

    
    mydata.save().then(item=> {
        res.send("This item is saved")
    }).catch(err=>{
        res.status(400).send("unable to save!");
    });

    //category now exists so now we can create a corresponding user or data

    // here i am defining the values instead
    // mydata.create({
    //     firstName : 'Apply for 10 jobs tomorrow!',
    //     lastName : false
    // }).then(function(err,todo){
    //     console.log(err,todo);
    // });

};

// exports.get = function(err,req,res,next){    
//     res.send('NOT IMPLEMENTED: Book create GET');    
//     // Category.find({})  // or we can use .find({}).populate('author categories').exec().then()
//     // .then(function(categories){
//     //     res.json(categories);
//     // },function(err){
//     //     next(err);
//     // });
// };

// exports.getOne = function(err,req,res,next){
//     var Category = req.Category;
//     res.json(Category);
// };

// exports.put = function(err,req,res,next){
//     Console.log('Hi from put!');
//     var Category = req.Category;
//     var update = req.body;

//     // _.merge(Category,update);    
//     Category.save(function(err,saved){
//         if(err){
//             next(err);
//         }else{
//             res.json(saved);
//         }
//     })
// };


// exports.delete = function(err,req,res,next){
//     req.category.remove(function(err,removed){
//         if(err){
//             next(err);
//         }else{
//             res.json(removed);
//         }
//     });
// };