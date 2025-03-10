import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
dotenv.config();
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
