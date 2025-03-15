import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import accountRouter from './routers/accountRouter.js';
// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();
//middlewares
app.use(express.json());
app.use(cors());

app.use('/api', accountRouter);
app.get('/', (req, res) => {
    res.send("API Working")
})


app.listen(port, ()=> console.log('Server started on port ' + port))