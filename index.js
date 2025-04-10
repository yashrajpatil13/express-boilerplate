import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// routes
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send('Hello!')
});

app.use("/users/v1/api", userRoutes);

app.listen(port, () => {
    console.log(`Listining on port : ${port}`);
})


