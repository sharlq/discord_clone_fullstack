import mongoData from '../models/mongoData'
import  {Request, Response} from 'express';
const addChannel = (req:Request,res:Response)=>{
    const dbData = req.body;
    mongoData.create(dbData,(err:any,data:any)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(201).send(data)
    })
}

const addNewMessage = (req:Request,res:Response)=>{
    
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
}

const getEverything = (req:Request,res:Response)=>{
    mongoData.find((err:any,data:any)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(200).send(data)
    })
}

const getConversation = (req:Request,res:Response)=>{
    const id = req.query.id;
    mongoData.find({_id:id},(err,data)=>{
        if(err){
            res.status(500).send(err)
            return;
        }
        res.status(200).send(data)
    })
}

const getAllChannels = (req:Request,res:Response)=>{
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
    }

    export {addChannel,addNewMessage,getAllChannels,getEverything,getConversation}