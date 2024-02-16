import express from 'express'

let BOOKS = [
  {
    id: 1,
    title: 'Harry Potter e a Pedra Filosofal',
    writer: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'O Chamado do Cucu',
    writer: 'Robert Galbraith',
  },
]

const app = express()
app.use(express.json())

const searchBook = (id) => BOOKS.find((book) => book.id === Number(id))

app.get('/', (req, res) => {
  res.status(200).send('Home')
})

app.get('/livros', (req, res) => {
  res.status(200).json(BOOKS)
})

app.get('/livros/:id', (req, res) => {
  const book = searchBook(req.params.id)
  if (!book) return res.status(404).send('Livro não encontrado.')
  res.status(200).json(book)
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

  BOOKS.push({ id, title, writer })
  res.status(201).send('Livro cadastrado com sucesso.')
})

app.put('/livros/:id', (req, res) => {
  const book = searchBook(req.params.id)
  if (!book) return res.status(404).send('Livro não encontrado.')

  const title = req.body.title
  const writer = req.body.writer
  if (!title && !writer) return res.status(400).send('Nenhuma alteração realizada.')

  const newBooks = BOOKS.map((book) => {
    if (book.id === Number(req.params.id)) return { ...book, title: title ?? book.title, writer: writer ?? book.writer }
    return book
  })

  BOOKS = newBooks
  res.status(200).send('Livro atualizado com sucesso.')
})

export default app
