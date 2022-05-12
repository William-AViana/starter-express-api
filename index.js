const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('First commit and first Deploy com Cyclic!')
})
app.listen(process.env.PORT || 3000)
