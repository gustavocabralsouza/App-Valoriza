import express from 'express'

const app = express()

app.get('/clients', (request, response) => {
    return response.send('Pagina raiz do servidor')
})

app.post('/client', (request, response) => {
    response.send('enviado')
})

app.listen(3000, ()=> console.log('servidor fd rodando na porta 3000')
)