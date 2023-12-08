//require express package
const express = require('express')
//create an app using the express package
const app = express()
//sets the port to 3000
const port = 3000
const port2 = 3001

//binding for an endpoint 
//"bind a get endpoint to object app using / URL(root)"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
})

//activates web server
//let webserver listen to this port(3000)
//once server starts, and successful - print message to console
app.listen(port, () => {
    console.log(`Example app listening to http://localhost:${port}`)
})

app.listen(port2, () => {
    console.log(`Example app listening to http://localhost:${port2}`)
})