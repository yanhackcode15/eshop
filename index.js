const PORT = 8000
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();
app.use(cors());

app.get('/', (req, res)=>{
    res.json('hi')
})



app.listen(PORT, ()=>console.log('App running on port, ', PORT))


