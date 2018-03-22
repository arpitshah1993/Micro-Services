var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/user");

var UserSchema = new Schema({
    name:String,
    completed:Boolean
});

var User = mongoose.model('User',UserSchema); // getter and setter method
User.create({
    name : 'Kunal Paliwal!',
    completed : false
}).then(function(err,User){
    console.log(err,User);
});

// var UserSchema = new mongoose.Schema({
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

module.exports = mongoose.model('user',UserSchema)
 