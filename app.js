const express = require("express");
const app = express();

const myLogger = (req, res, next) => {
    console.log("hello middleware");
    next();
};

app.get("/superMiddleware", myLogger, (req, res) => {
   res.send("hello world");
});

app.listen(3000, () => console.log(`Server up and running on port 3000 !`));
