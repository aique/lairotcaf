import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import configureRouter from "./config/routing";

/**
 * Loading vars
 */
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

/**
 * Configuring routes
 */
const app = express();

app.use(express.json());
app.use(cors());

configureRouter(app)

/**
 * Running app
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});