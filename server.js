import http from 'http'

const PORT = 8000

const routes = {
  '/': 'Home',
  '/livros': 'Livros',
  '/autores': 'Autores',
}

const server = http.createServer((req, res) => {
  // Envio de conteúdo em texto simples
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello World");

  // Envio de conteúdo em HTML
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end("<h1>Hello World</h1>");

  // Envio de conteúdo em JSON
  // res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(json))

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(routes[req.url])
})

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`)
})
