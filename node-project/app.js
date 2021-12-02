const express = require('express')

const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';
app.use(("/teste"),(req,res) => {
  res.send("Hello Wssorld2!")
})

app.listen(8080)
