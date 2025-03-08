import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['Student',"Faculty","HOD","Admin"],required:true},
    department:String,
    profilePic:String,
    isVerified:{type:String,default:false}
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)