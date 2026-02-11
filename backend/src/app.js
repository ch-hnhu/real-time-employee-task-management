import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import router from "./routes/index.route.js";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_, res) => {
	res.send("hello world");
});

app.use("/api", router);

export default app;
