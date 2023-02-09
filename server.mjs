const PORT = 8000
import express from 'express'
import cors from 'cors'
// import axios from 'axios'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export {db, auth};

//express server
const server = express();
server.use(cors());
server.use(express.json());

server.post('/signup', (req, res)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth=>{
        if(auth){
            res.status(200).send('ok')
        }
    })
    .catch(e=>res.status(406).send(e))
})

server.post('/signin', async (req, res)=>{
  
    const email = req.body.email;
    const password = req.body.password;

    console.log('body', req.body)
    signInWithEmailAndPassword(auth, email, password)
    .then(auth=>{
        console.log('auth')
        res.status(200).send('ok')
    }
        )
    .catch(e=>res.status(406).send(e))
})


server.listen(PORT, ()=>console.log('App running on port, ', PORT))







const createUser=(email, password)=>{
  return 
}
const loginUser=(email, password)=>{
  return 
}

export {createUser, loginUser}


