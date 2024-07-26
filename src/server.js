import { unsubscribe } from 'node:diagnostics_channel'
import http from 'node:http'

// Criar um user (name, email, password) - tudo isso com o req
// Res é usado para colocar uma resposta de quem está chamando os comandos

//Rotas de criação e listagem (HTTP)//
// - Criar user
// - Listagem de user
// - Edição de user
// - Remoção de user

// -HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE (comandos mais comuns dentro de API no dia a dia)

// GET ==> Buscar um recurso do back-end
// POST ==> Criar um recurso no back-end
// PUT ==> Atualizar um recurso no back-end (usado para alterar vários dados ao mesmo tempo)
// PATH ==> Atualizar uma informação unica ou especifica no back-end (usado para editar algo em especifico)
// DELETE ==> Deletar um recurso do back-end


// GET users ==> Buscando user do back-end
// POST users ==> Criando um user no back-end

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários')
  }

  return res.end('Hello Dev')
})

server.listen(3333)

//localhost:3333