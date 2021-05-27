import express,{Request,Response} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from './models/mongoData'
import dotenv from 'dotenv'


 dotenv.config();
//app configuration
const app = express()
const PORT = process.env.PORT ||8002
// middlewares
app.use(express.json())
app.use(cors())

// db config 
const mongoURI:any =process.env.MONGODB_URI
mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

)

// api routes
app.get('/',(req:Request,res:Response)=>res.status(200).send('hello world'))

app.post('/new/channel',(req:Request,res:Response)=>{
    const dbData = req.body;
    mongoData.create(dbData,(err:any,data:any)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(201).send(data)
    })
})

app.get('/get/channelList',(req:Request,res:Response)=>{
mongoData.find((err,data)=>{
    if(err){
        res.status(500).send(err)
        return;
    }
    let channels:string[]=[];
    data.map((channelData:any)=>{
        const channelInfo ={
        id:channelData._id,
        name: channelData.channelName
        }
    })
    res.status(200).send(data);
})
})

app.post('/new/message',(req:Request,res:Response)=>{
    
    const newMessage = req.body;
    mongoData.update(
        {_id:req.query.id},
        {$push:{conversation:req.body}},
        // @ts-ignore
        (err:any,data:any)=>{
            if(err){
                console.log('Error saving the message')
                console.log(err)
                res.status(500).send(err)
                return;
            }
            res.status(201).send(data)
        }
        )
        res.send("fk you")
})
app.get('/get/data',(req,res)=>{
    mongoData.find((err:any,data:any)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(200).send(data)
    })
})
app.get('/get/conversation',(req:Request,res:Response)=>{
    const id = req.query.id;
    mongoData.find({_id:id},(err,data)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(200).send(data)
    })
})
// listen
app.listen(PORT, ()=> console.log(`listen to localhosr:${PORT}`))