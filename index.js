const express = require('express');
const app = express()
const port = 3030

app.get('/', (request, response) => {
    response.send('Servidor funcionando!')
})

app.listen(port, () => {
    console.log('Servidor funcionando na porta 3030!')
})