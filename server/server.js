import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import blogRouter from "./routes/blogRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

//access variable in dotenv file
dotenv.config();
const port = process.env.PORT || 5000;

//db run fucntion
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

// error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
