//BiwgcDEqGq88fgrz

const express = require("express");
const taskRoutes = require("./routes/taskRoute");

const notFound = require("./middlewares/notFound");
const connectDB = require("./Utils/DB");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use("/api/v1/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
  connectDB();
});
