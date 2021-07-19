const express = require('express') //express module을 가져와라
const app = express() //express() function 을 이용해서 express app 을 만듬
const port = 5500
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://wwwpyk:0722@wwwpyk.7lopm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('MongoDB Connected..')).catch(err => console.log(err))



//root drectory('/') 에 res.sen() 로 출력 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})