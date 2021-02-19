const express = require("express");
const http = require("http");
const PORT = process.env.PORT||2456
app = express()
app.use(express.json())

app.get("/test", (req, res, next) => {
    res.send({
        message: "port "+PORT+ "is fine ! You can communicate with it."
    })
})
const httpServer = http.createServer(app);
httpServer.listen(PORT,() => console.log(`http server listening on port ${PORT}`));
