import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { User } from './src/models/User'
import bcrypt from 'bcrypt'

dotenv.config()

const app = express()
app.use(express.json)
const port = process.env.PORT 
const users = [];

app.get('/', (req: Request, res: Response) => {
  res.send('This is TOMO backend')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})


app.post("/signup", (req, res) => {
  const {phoneNumber, password} = req.body;
  const hash = await bcrypt.hash(password, 10, )
}) 