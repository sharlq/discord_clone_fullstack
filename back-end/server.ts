import {Request,Response} from 'express'
import mongoData from './models/mongoData'
import {app,PORT} from './config/configurationData'
import  './config/databaseConfiguration'
import './middlewares/middleware'

import { watch } from 'fs'







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
    
    //const newMessage = req.body;
    mongoData.updateOne(
        {_id:req.query.id},
        {$push:{conversation:req.body}},
        // @ts-ignore
        (err:any)=>{
            if(err){
                console.log('Error saving the message')
                console.log(err)
                res.status(500).send(err)
            }
        }
        )
        res.status(201).send(req.body)
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