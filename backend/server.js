import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import connctToMongoDb from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.route.js"
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); 



app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist")));


// app.get("/:wildcard(*)", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

// app.get("*",(req, res)=>{
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// })


server.listen(PORT, () =>{
    connctToMongoDb();
    console.log(`server is running on port ${PORT}: http://localhost:${PORT}`)
});
