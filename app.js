const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Bloop bleep bop");
});
