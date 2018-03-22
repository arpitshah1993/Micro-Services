var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/userData");

var UserDataSchema = new Schema({
    name:String,
    completed:Boolean
});

var UserData = mongoose.model('UserData',UserDataSchema); // getter and setter method
UserData.create({
    name : 'Kunal Paliwal!',
    completed : false
}).then(function(err,UserData){
    console.log(err,UserData);
});

// var UserDataSchema = new mongoose.Schema({
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

module.exports = mongoose.model('UserData',UserDataSchema)
 