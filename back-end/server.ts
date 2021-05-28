import {Request,Response} from 'express'
import mongoData from './models/mongoData'
import {app,PORT} from './config/configurationData'
import  './config/databaseConfiguration'
import './middlewares/middleware'
import router from './router/router'








// api routes
app.get('/',(req:Request,res:Response)=>res.status(200).send('hello world'))

app.use('/',router)

// listen


app.listen(PORT, ()=> console.log(`listen to localhosr:${PORT}`))

