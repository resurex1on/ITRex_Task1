const express = require('express')
const axios = require('axios')

const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/exchanges', async (req, res) => {
  res.status(200)
  return axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((response) => {
      res.send(response.data)
    });


})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
