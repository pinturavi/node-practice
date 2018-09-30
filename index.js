const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello pintu');
})

app.listen(3000, ()=>{
    console.log('server listeninggg at port 3000')
})