import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
	name: {
		first: "Leon",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
	location: {
		country: "France",
		city: "Bergerac",
	},
};
app.get("/api/employees", (req, res) => {
	console.log("Route /api/employees appelée");
	res.json({ results: [sampleEmployee] });
});

const port = 3313;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// const latinText = (req, res) => {
// 	res.json();
// };
// app.get("/", latinText);

// const port = 3311;

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });
