import express from 'express'
import { claimPoints } from '../controllers/claimController.js'

const claimRouter = express.Router();

claimRouter.post('/claimPoints', claimPoints);

export default claimRouter;