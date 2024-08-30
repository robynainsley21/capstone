import express from "express";
import bodyParser from "body-parser";
import { trainers } from '../model/index.js'
import { verifyToken } from "../middleware/AuthenticateUser.js";

const trainerRouter = express.Router();

trainerRouter.use(bodyParser.json())

trainerRouter.get('/', (req, res) => {
    trainers.fetchTrainers(req, res)
})

trainerRouter.get('/:id', (req, res) => {
    trainers.fetchTrainer(req, res)
})

trainerRouter.post('/addTrainer', verifyToken, (req, res) => {
    trainers.addTrainer(req, res)
})

trainerRouter.patch('/update/:id', verifyToken, (req, res) => {
    trainers.updateTrainer(req, res)
})

trainerRouter.delete('/delete/:id', verifyToken, (req, res) => {
    trainers.deleteTrainer(req, res)
})

export {
    trainerRouter
}