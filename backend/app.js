import express  from "express";
import mongoose from "mongoose";
import blogRrouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app =express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRrouter);

mongoose.connect('mongodb+srv://admin:3F65CqTGAswn0rcq@cluster0.cqh6g.mongodb.net/BlogApp?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and listening to Database and listing to local host 5000"))
.catch((err)=>console.log(err));


//3F65CqTGAswn0rcq