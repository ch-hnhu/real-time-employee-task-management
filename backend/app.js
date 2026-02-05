import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import ownerApi from "./routes/owner.route.js";

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_, res) => {
	res.send("hello world");
});

app.use(ownerApi);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
