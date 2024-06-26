require('dotenv').config({ path: './.env' })
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const search = require('./router/search')

app.use('/search', search)

app.listen(port, () => {
    console.log("Aplicativo Rodando!")
});

module.exports = app