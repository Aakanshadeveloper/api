var mongoose = require("mongoose");

var postSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            require:true,
            maxlength:35,
            trim:true
        },
        id:{
            type: Number,
            maxlength:50,
            trim:true
        },
        title:{
            type: String,
            maxlength:50,
         },
        class :{
            type:Number,
            maxlength:20,

         }
         },
    {timestamps:true}

);
module.exports=mongoose.model("Posts",postSchema);
