const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // serve your HTML files

// API to store data
app.post("/submit", (req, res) => {
    const newData = req.body;

    let data = [];

    if (fs.existsSync("data.json")) {
        data = JSON.parse(fs.readFileSync("data.json"));
    }

    data.push(newData);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.json({ message: "Saved successfully" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

app.get("/data", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json(data);
});