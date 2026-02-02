import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    restaurantIS:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    dishName:{
        type:String,
        required:true,
    },
    cuisine:{
        type:String,
        required:true,
    },
    servingsize:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:["veg","non-veg","vegan","egg","jain","gluten-free","contains-nuts",],
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    availability:{
        type:Boolean,
        required:true,
        default:true,
    },
    image:{
        type:[{
            url:{type:String, required:true},
            publicID:{type:String, required:true},
        }],
        required:true,
    }
})