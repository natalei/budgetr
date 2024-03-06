import { Request, Response } from "express"
import mongoose from "mongoose";

export async function getUserById(req: Request, res: Response) {
    res.send({ message: "Got user by id"})
};

export async function createUser(req: Request, res: Response) {
    const  newUserData = req.body;
    const formattedUserdData = {
        name: newUserData.name,
        displayName: newUserData.displayName,
        email: newUserData.email,
        password: newUserData.password
    }

    // let existingUserData =
    mongoose.connection.db.listCollections({email: newUserData.email})

    res.send({ message: "Created user"});
};

export async function loginUser(req: Request, res: Response) {
    res.send({ message: "Logged in user"});
};

export async function updateUser(req: Request, res: Response) {
    res.send({ message: "Updated user data"})
};

// export async function archiveUser(req: Request, res: Response) {
//     res.json({ message: "Archived user"})
// };

export async function deleteUser(req: Request, res: Response) {
    res.send({ message: "Deleted user" })
};
