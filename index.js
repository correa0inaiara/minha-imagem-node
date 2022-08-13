const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World com node.js dentro do docker!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000.')
})