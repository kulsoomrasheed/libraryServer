const express= require('express')
const { Book } = require('../model/model')
const { auth } = require('../middlewares/auth.middleware')
const bookRouter = express.Router()
bookRouter.use(auth)

bookRouter.get("/",async(req,res)=>{
    try {
        const doctors = await Book.find();
        res.json({msg:"Success",doctors});
      } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ error: 'An error occurred while fetching doctors' });
      }
})

bookRouter.post("/",async(req,res)=>{
   const username = req.body.username;
    const { title } = req.body;
    try{
    const employee= new Book({ title,username})
    await employee.save()
    res.status(200).json({msg:"A new doctor has been added"})
    }catch{
        res.status(500).json({msg:"Error saving doctor"})

    }
})



    bookRouter.delete("/delete/:id",async(req,res)=>{
        let ID=req.params.id
        let data =await Book.findOne({_id:ID})
        let userID_post=data.userID
        let userID_req=req.body.userID
        try {
            
                 if((userID_post==userID_req)){
                    await Book.findByIdAndDelete({
                     _id:ID
                })
                res.status(200).send(`doctor with ${ID} is deleted`)
            }else{
                res.status(404).send("Not authorized")
            }
            
        } catch (error) {
            res.status(500).send(error)
        }
    })


    bookRouter.get('/', async (req, res) => {
        const { title } = req.query;
      
        try {
          const posts = await Book.find({ title: { $regex: title, $options: 'i' } });
          res.json(posts);
        } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred');
        }
      });

      bookRouter.get('/', async (req, res) => {
        const { category } = req.query;
      
        try {
          const posts = await Book.find({
            category: { $regex: category, $options: 'i' },
          });
          res.json(posts);
        } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred');
        }
      });

      bookRouter.get('/api/blogs', async (req, res) => {
        const { sort, order } = req.query;
      
        try {
          const sortOrder = order === 'asc' ? 1 : -1;
          const posts = await Book.find().sort({ [sort]: sortOrder });
          res.json(posts);
        } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred');
        }
      });

module.exports={
    bookRouter
}