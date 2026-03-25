import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { IndexRoutes } from './app/routes';
import { notFound } from './app/middlewares/notFound';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
import { auth } from './app/lib/auth';
import { toNodeHandler } from 'better-auth/node';
import path from 'path';


const app: Application = express();

app.set("view engine", "ejs");
app.set("views",path.resolve(process.cwd(), `src/app/templates`) );
app.use("/api/auth", toNodeHandler(auth))

app.use(express.urlencoded({ extended: true }));

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// application routes

app.use("/api/v1", IndexRoutes);

app.get('/', async (req: Request, res: Response) => {
    res.status(201).json({
        success: true,
        message: 'API is working',
    })
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;
