const express = require("express");
const app = express();
const connectToMongo = require("./db");
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/questionRoute");
const cors = require("cors");
const answersRoutes = require("./routes/ansRoute");

connectToMongo();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth",  authRoutes);
app.use("/api/questions", questionRoutes)
app.use("/api/answers", answersRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});