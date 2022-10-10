import app from "./app";
import { AppDataSource } from "./data-source";
import "reflect-metadata";

async function reg() {
    try{
        await AppDataSource.initialize();
        app.listen(Port);
        console.log(`server port ${Port}`);
    }
    catch(error){
        console.error(error);
    }
    }
    
reg();
const Port = process.env.Port || 3000;

