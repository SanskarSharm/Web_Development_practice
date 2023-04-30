const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send({hello:"world from get api e"});
});
app.post('/', (req, res) => {
  /*res.send({
    hello:"world"
  })*/
  console.log(req.body)
  res.send({
    hello:"post"
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})