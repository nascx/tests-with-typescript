import e, { Request, Response } from "express";
import cors from "cors";

const app = e();

app.use(e.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hi' });
});

app.listen(3000)

export default app;