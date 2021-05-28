import express from 'express';
import {addChannel,addNewMessage} from '../helpers/helpers';

const router = express.Router();

router.post('/channel',addChannel)
router.post('/message',addNewMessage)

export default router