const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 4041;
const usersApi = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_, res) => {
	res.send("hello world");
});

app.use("/users", usersApi);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
