import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1', router);

app.get('/', async (req: Request, res: Response) => {

  const category = await prisma.category.create({
        data: {
            name: 'Business Card',
            slug: 'business-card'
        }
    })
    res.status(201).json({
        success: true,
        message: 'API is working',
        data: category
    })
  // res.send('Hello from Apollo Gears World!');
});

export default app;
