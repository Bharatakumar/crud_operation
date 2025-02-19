/*const mongoosh = require('mongoose');
 const student = new mongoosh.Schema({
    name:{
        type:String,
        required:true
    },
    student_id:{
        type:String,
        required:true
    },
    phone_nbr:{
        type:Number,
        required:true
    },
    school_name:{
        type:String,
        required:true

    },

},
  {
    timestamps:true
  }

)
module.exports = mongoosh.model('mydata',student)
*/

const mongoosh= require('mongoose');
const student = new mongoosh.Schema({
    name:{
        type:String,
        required:true
    },
    student_id:{
        type:String,
        required:true
    },
    phone_nbr:{
        type:String,
        required:true
    },
    school_name:{
        type:String,
        required:true
    },

},
{
    timestamps:true
}

)
module.exports = mongoosh.model('mydata',student)