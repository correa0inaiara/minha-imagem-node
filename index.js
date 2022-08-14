const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'db', // nome do serviço, através de rede compartilada pelo docker
    user: 'root',
    password: 'root',
    database: 'mydb'
})

connection.connect()

const app = express()

app.get('/', (req, res) => {
    res.send('\nHello from My Node Image!!!\n\n+ Com user definido no Dockerfile, por questões de segurança.\n+ Docker Compose: para orquestração dos containers.\n+ Script bash para execução dos comandos dentro do container, evitando ter que rodá-los manualmente no terminal.\n+ Conexão com MYSQL em outro container.')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000.')
})