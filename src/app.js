import express from 'express'
import { LIVROS } from './mocks/livros.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Home')
})

app.get('/livros', (req, res) => {
  res.status(200).json(LIVROS)
})

app.get('/autores', (req, res) => {
  res.status(200).send('Autores')
})

app.post('/livros', (req, res) => {
  const title = req.body.title
  const writer = req.body.writer
  if (!title || !writer) return res.status(400).send('Livro não cadastrado com sucesso. Faltam dados para o cadastro.')

  // TODO: pegar o id do último dado cadastrado para criar uma sequência, ao invés de usar um número randômico
  const id = Math.floor(Math.random() * 100)

  LIVROS.push({ id, title, writer })
  res.status(201).send('Livro cadastrado com sucesso.')
})

export default app
