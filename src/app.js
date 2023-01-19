const app = require('./server/server')
const axios = require('axios')
require('dotenv').config();
require('./database/db');


const PORT = process.env.PORT || 8080;

app.listen(PORT ,() => {
    console.log(`Server listening on port ${PORT}`)
})

axios.get("https://rickandmortyapi.com/api/character")
