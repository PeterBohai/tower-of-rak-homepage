const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    res.download(__dirname + "/downloads/tower-of-rak.zip");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started successfully");
});
