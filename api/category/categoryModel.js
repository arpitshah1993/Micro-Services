var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var conn = require('../../mongo_connect');


var db = conn.useDb('categories');

var CategorySchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

var CategoryModel = db.model('categories',CategorySchema);

// var User = mongoose.model("User", nameSchema);


// var Category = mongoose.model('Category',CategorySchema); // getter and setter method
// Category.create({
//     name : 'Kunal Paliwal!',
//     completed : false
// }).then(function(err,Category){
//     console.log(err,Category);
// });

// exports.save = function(req,res){
//     Category.create({
//         name : 'Tejan Paliwal!',
//         completed : 'check'
//     }).then(function(err,Category){
//         console.log(err,Category);
//     });
// };



// var CategorySchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     gender:String,
//     Born:Date,
//     age:{
//         type:Number,
//         min:0,
//         max:90
//     },
//     hobbies:[],
//     code:Buffer,
//     location:{
//         state:String,
//         city:String,
//         zip:Number
//     },
//     Parent:{
//         type : mongoose.Schema.Types.ObjectId,
//         ref : 'Owner'
//     }
// });

// module.exports = mongoose.model('Category',CategorySchema);
module.exports = exports = CategoryModel;