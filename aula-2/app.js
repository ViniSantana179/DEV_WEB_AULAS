const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/user')
    
app.use('/user', user)

app.listen(port, ()=>{
    console.log('Deu Boa')
})