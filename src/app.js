import express from 'express'
import { LIVROS } from './mocks/livros.js'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Home')
})

app.get('/livros', (req, res) => {
  res.status(200).json(LIVROS)
})

app.get('/autores', (req, res) => {
  res.status(200).send('Autores')
})

export default app
