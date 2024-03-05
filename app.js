require('dotenv').config()
const express =require('express');
const app = express();
const MongoConnection=require('./db/db')
const Codesave=require('./models/code')
const Namedata=require('./models/namedata')
const cors =require('cors')

app.use(cors())
app.get('/', async(req, res) => {
    let data = await Codesave.find()
    res.send(data)
})

app.get('/data', async(req, res) => {
    let data = await Namedata.find()
    res.send(data)
})

app.use(express.json());
app.post('/', async(req, res) => {
    let data= new Codesave(req.body)
    let result =await data.save()
 res.send(result);

})
app.post('/data', async(req, res) => {
    let data= new Namedata(req.body)
    let result =await data.save()
 res.send(result);

})

const start =async(req, res) => {
   try{
    await MongoConnection(process.env.MONGODB_URl)
    console.log('connection established')
   }catch(err){
    console.log(err)
   }
    
    app.listen(7000,()=>{
        console.log('Server is running on port 7000');
    })
}

start()