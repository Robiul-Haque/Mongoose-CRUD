import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from 'http';
let server: Server;

async function main() {
    try {
        await mongoose.connect(config.DB_URL as string);
        server = app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main();