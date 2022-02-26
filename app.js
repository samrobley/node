const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello world");
});

const port = 8081
app.listen(port, () => {
    console.log("Bloop bleep bop");
});
