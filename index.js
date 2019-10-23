const express = require('express')
const app = express()
const port = process.env.PORT || 2810

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html')
})

app.get("/bianca", (req, res) => {
    res.send("meu nome")
})

app.listen(port, () =>
console.log(`Example app listening on port ${port}!`))