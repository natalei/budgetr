import { Request, Response } from "express"
import mongoose from "mongoose"

const Schema = mongoose.Schema;
const Model = require("./budget.model");

export async function getBudgets(req: Request, res: Response) {

}

export async function createBudget(req: Request, res: Response) {
    console.log(req.body); // collecting form body from client
    res.send({ transaction: null }) // send http response to client

}

export async function getBudgetById(req: Request, res: Response) {

}

export async function updateBudget(req: Request, res: Response) {

}

export async function archiveBudget(req: Request, res: Response) {

}

export async function deleteBudget(req: Request, res: Response) {

}
