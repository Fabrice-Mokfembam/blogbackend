import express from 'express'; 
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import dotenv from 'dotenv'; 

import { connection } from './config/database.js';
import { userRouter } from './routes/userRoute.js';
import { commentRouter } from './routes/commentRoute.js';
import { blogRouter } from './routes/blogRoute.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.use('/api/users', userRouter);
app.use('/api/comment', commentRouter);
app.use('/api/blogs', blogRouter);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connection();
});
