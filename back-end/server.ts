import {Request,Response} from 'express'
import {app,PORT} from './config/configurationData'
import  './config/databaseConfiguration'
import './middlewares/middleware'
import router from './router/router'


app.get('/',(req:Request,res:Response)=>res.status(200).send('hello world'))
app.use('/',router)



app.listen(PORT, ()=> console.log(`listen to localhosr:${PORT}`))

