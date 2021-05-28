import express from 'express';
import getRouter from './getRouter'
import newRouter from './newRouter'

const router = express.Router();

router.use('/get',getRouter)
router.use('/new',newRouter)

export default router