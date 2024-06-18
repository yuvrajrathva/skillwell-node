const express = require("express");
const userRouter = require("./routes/signup");
const userTypeRouter = require("./routes/userType");
require("dotenv").config();

const app = express();
const PORT = process.env.BACKEND_PORT || "8000";

// connection to db
const { connectMongoDB } = require("./connection");
connectMongoDB(process.env.MONGODB_URL);

// middleware
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/user", userRouter);
app.use("/api", userTypeRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
