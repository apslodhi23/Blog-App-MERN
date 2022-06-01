import  express  from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller";
const blogRrouter =express.Router();


blogRrouter.get("/",getAllBlogs);
blogRrouter.post("/add",addBlog);
blogRrouter.put("/update/:id",updateBlog);
blogRrouter.get("/:id",getById);
blogRrouter.delete("/:id",deleteBlog)
export default blogRrouter;