import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import authRouter from './routes/auth.mjs'
import postRouter from './routes/post.mjs'




const app = express();
app.use(express.json()); // body parser
// app.use(cors())

// /api/v1/login
app.use("/api/v1", authRouter)


app.use((req, res, next) => {
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})


app.use("/api/v1", postRouter)


app.use(express.static(path.join(__dirname, './vector/build')))

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})