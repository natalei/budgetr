import { Request, Response } from "express"
import mongoose from "mongoose";
import User from "./user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function getUserById(req: Request, res: Response) {
    res.send({ message: "Got user by id"})
};

export async function createUser(req: Request, res: Response) {
    // fairly standard / rudimentary create controller function
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashedPassword);
        // create a user object with the data from the req
        const user = new User({
            name: req.body.name,
            displayName: req.body.displayName,
            email: req.body.email,
            password: hashedPassword
        }); // constructor function w/ "new"
        await user.save() // .save() hidden method, saves document to db
        res.send({user}) // implies {user: user} b/c key matches value
    } catch(err) {
        res.status(400).send(err);
    }
};

export async function loginUser(req: Request, res: Response) {
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        if (!foundUser) {
            return res.send({ message: "Could not find user" })
        }
        const isPasswordVerified = await bcrypt.compare(req.body.password, foundUser.password);
        console.log(isPasswordVerified);
        if (isPasswordVerified) {
            // when server verifies email / password w/ db, want to authorize user to continue using site w/ jwt
            const userData = {
                id: foundUser._id,
                name: foundUser.name,
                displayName: foundUser.displayName,
                email: foundUser.email
            };
            // console.log("JWT:::::::::::::::;", foundUser )
            const token = jwt.sign(userData, "secretkey"); // encrypts foundUser object w/ the private key ("secretkey")
            console.log(token);
            res.send({token}); // client will take this token, save it to local storage, token will be attached to any new fetch reqs sent by user
        } else {
            res.status(403).send({ message: "Could not verify password" });
        }
    } catch(err) {
        res.status(400).send(err);
    }
};

export async function updateUser(req: Request, res: Response) {
    try {

    } catch(err) {
        res.status(400).send(err);
    }
};

// export async function archiveUser(req: Request, res: Response) {
//     res.json({ message: "Archived user"})
// };

export async function deleteUser(req: Request, res: Response) {
    res.send({ message: "Deleted user" })
};
