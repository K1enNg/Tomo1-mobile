import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { Parent, Child } from './src/models/User'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import cors from "cors";

dotenv.config()

const app = express()

app.use(cors({
  origin: 'http://localhost:8081', 
  credentials: true,
}));

app.use(express.json())

const port = process.env.EXPO_PUBLIC_PORT; 

const parents: Parent[] = [];
const children: Child[] = [];
const signupSessions: Record<string, { data: any;}> = {};

app.get('/', (req: Request, res: Response) => {
  res.send('This is TOMO backend')
})

app.post("/child", async (req, res) => {
  const {childName, dob} = req.body;
  const childID = crypto.randomUUID();

  if (!childName) {
    res.status(400).send("Vui lòng nhập tên của bé.");
    return;
  }

  if (!dob) {
    res.status(400).send("Vui lòng nhập ngày tháng năm sinh của bé.");
    return;
  }

  try {
    children.push({
      childID,
      childName,
      dob
    });

    console.log(children);

    res.status(200).send("OK");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
})

app.post("/signin", async (req, res) => {
  const {phoneNumber, password} = req.body;

  if (!phoneNumber || !password) {
    res.status(400).send("Vui lòng nhập đầy đủ Số Điện Thoại và Mật Khẩu tài khoản!");
    return;
  }

  const parent = parents.find(p => phoneNumber == p.phoneNumber);

  if(!parent) {
    res.status(404).send("Không tìm thấy người dùng!"); 
    return;
  }

  try {
    const isValid = await bcrypt.compare(password, parent.password);

    if(!isValid){
     res.status(401).send("Sai mật khẩu!")
     return
    }

    if(isValid){
      res.status(200).send("OK");
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Xảy ra lỗi!");
  }
})

app.post("/signup/start", (req, res) =>{
  const sessionId = crypto.randomUUID();

  signupSessions[sessionId] = {
    data: {}
  }

  return res.status(200).json({sessionId})
})

app.patch("/signup/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  const session = signupSessions[sessionId];

  if (!session) return res.status(404).send("Xảy ra lỗi!");

  const body = req.body;

  if ("parentName" in body) {
    if (!body.parentName.trim()) return res.status(400).send("Tên không hợp lệ!");
    session.data.parentName = body.parentName;
  }

  if ("phoneNumber" in body) {
    const regex = /^[+]?[\d ]{7,20}$/;
    if (!regex.test(body.phoneNumber))
      return res.status(400).send("Số Điện Thoại không hợp lệ!");
    session.data.phoneNumber = body.phoneNumber;
  }

  if ("password" in body) {
    if (body.password.length === 0)
      return res.status(400).send("Vui lòng nhập mật khẩu!");

    if (body.password.length < 8)
      return res.status(400).send("Mật khẩu phải có ít nhất 8 ký tự!");

    session.data.password = body.password;
  }

  if ("verifyPassword" in body) {
    if(body.verifyPassword.length === 0) {      
      return res.status(400).send("Vui lòng nhập mật khẩu!");
    }

    if (session.data.password && body.verifyPassword !== session.data.password){
      console.log(session.data.password)
      console.log(body.verifyPassword)
      return res.status(400).send("Mật khẩu không khớp!");
    }

    session.data.verifyPassword = body.verifyPassword;
  }

  return res.status(200).json({
    message: "Lưu thành công!",
    saved: session.data,
  });
});

app.post("/signup/complete/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const session = signupSessions[sessionId];

  if (!session) return res.status(404).send("Xảy ra lỗi!");

  const { parentName, phoneNumber, password, verifyPassword } = session.data;

  console.log(parentName);
  console.log(phoneNumber);
  console.log(password);
  console.log(verifyPassword);

  if (!parentName || !phoneNumber || !password || !verifyPassword) {
    return res.status(400).send("Vui lòng điền đầy đủ thông tin!");
  }

  const parentID = crypto.randomUUID();
  const hash = await bcrypt.hash(password, 12);

  parents.push({
    parentID,
    parentName,
    phoneNumber,
    password: hash,
  });

  // delete signupSessions[sessionId];

  return res.status(200).json({
    message: "Đăng ký thành công!",
    parentID,
  });
});

{/* Testing Only */}
app.post("/signup/field", (req, res) => {
  const { sessionId, fieldName, value} =  req.body;

  if(!signupSessions[sessionId]) {
    return res.status(404).send("Xảy ra lỗi!")
  }

  signupSessions[sessionId].data[fieldName] = value;
  return res.status(200).send("OK");
})


app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})