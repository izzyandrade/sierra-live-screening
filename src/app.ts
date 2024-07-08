import express from "express";
import cors from "cors";
import morgan from "morgan";
import listingsRouter from "./routes/listingsRouter";

const app = express();

app.use(morgan('tiny'))
app.use(cors());

app.use(express.json())

app.use('/listings', listingsRouter)

export default app;