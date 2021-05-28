import express from 'express'
import cors from 'cors'
import {app} from '../config/configurationData'
app.use(express.json())
app.use(cors())