const mongoose= require('mongoose')
const userSchema=mongoose.Schema({
    email:{type:String,unique:true},
    username:{type:String,unique:true},
    pass:String,
    roles: { type: [String], default: [] } // Define an array of strings with default value as an empty array
},{
    versionKey:false}
    )
    const UserModel=mongoose.model('User',userSchema)


    const blogPostSchema=mongoose.Schema({
        username:String,
        content:String,
        title:String,
        content:String,
        likes:Number,
        date : String,
        category:String,
        comments:[{ username: String, content: String }]
    },{
        versionKey:false}
        )
        const BlogPostModel=mongoose.model('Blogs',blogPostSchema)
        module.exports={
            UserModel,BlogPostModel
        }