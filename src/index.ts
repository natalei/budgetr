import express from "express"
import bodyParser from "body-parser"
import router from "./router"
import { initMongoose } from "./../src/db"

const PORT = 3000;
const server = express();

server.use(bodyParser.json());
server.use("/", router);

server.listen(PORT, () => {
    console.log("server listening on port: ", PORT);
    initMongoose();
});
