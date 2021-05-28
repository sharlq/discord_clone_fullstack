import mongoose from 'mongoose'
import {pusher} from './configurationData'
const mongoURI:any =process.env.MONGODB_URI
mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}
)

mongoose.connection.once('open',()=>{
    console.log("DB conected")
    const changeStream = mongoose.connection.collection('conversation').watch();
    changeStream.on('change',(change)=>{
        if(change.operationType === 'insert'){
            pusher.trigger('channels','newChannel',{
                'change':change
            });
        }else if(change.operationType==='update'){
            pusher.trigger('conversaton','newMessage',{
                'change':change
            })
        }else{
            console.log('Error trigger Pusher')
        }
    })
})


