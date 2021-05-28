import express from 'express'
import dotenv from 'dotenv'
import Pusher from 'pusher'


dotenv.config();
const app = express()
const PORT = process.env.PORT ||8002
const PUSHER_KEY=  process.env.PUSHER_KEY
const PUSHER_SECRET= process.env.PUSHER_SECRET
const pusher = new Pusher({
    appId: "1211095",
    key: PUSHER_KEY!,
    secret: PUSHER_SECRET!,
    cluster: "ap2",
    useTLS: true
});

export {app , PORT ,pusher}