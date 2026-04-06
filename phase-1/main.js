import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hell nawh !')



})

app.post ('/',(req,res)=>{
  console.log('hey its a post rq');
  res.send('heyyy posstt')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
