const express = require("express");
const router = express.Router();

const users = [{ name: "tako", email: "tako@gmail.com" }];

router.get("/users", (_, res) => {
	res.json({ ok: true, users });
});

router.get("/users/:name", (req, res) => {
	const name = req.params.name;
	const user = users.filter((u) => u.name === name)[0] || null;
	res.json({ ok: true, user });
});

router.post("/users", (req, res) => {
	const { name, email } = req.body;
	if (name && email) {
		users.push({ name, email });
	}
	res.json({ ok: true, users });
});

module.exports = router;
