const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
	res.download(__dirname + "/downloads/Tower-of-Rak.zip");
});

app.listen(process.env.PORT || 3000, function (){
	console.log("Server started on port 3000...");
});
