import express from 'express';
import {getAllChannels,getConversation,getEverything} from '../helpers/helpers';

const router = express.Router();

router.get('/channelList',getAllChannels)
router.get('/data',getEverything)
router.get('/conversation',getConversation)

export default router