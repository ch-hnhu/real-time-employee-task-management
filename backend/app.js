import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import ownerApi from "./routes/owner.route.js";

const app = express();
const port = process.env.PORT || 4041;

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

app.use(ownerApi);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
