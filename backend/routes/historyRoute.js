import express from 'express'
import { getClaimHistory } from '../controllers/historyController.js'

const historyRouter = express.Router();

historyRouter.get('/getClaimHistory', getClaimHistory);

export default historyRouter;