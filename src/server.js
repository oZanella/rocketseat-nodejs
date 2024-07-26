import { unsubscribe } from 'node:diagnostics_channel'
import http from 'node:http'

//O que é um conceito Stateful? 
  // - Sempre vai ter algum dado salvo em memória ou seja caso não tenha nada na memória (depende da memória) vai trabalhar de forma diferente
// O que é um conceito Stateless?
  // - Não salva nada em memória, sempre salva em bancos de dados, arquivos de textos ou exitCode, assim encerrando ela não vai ocorrer problemas justamente por conta disso.

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end(users)
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Henrique Zanella',
      email: 'henriquezanella19@gmail.com',
    })


    return res.end('Criação de usuários')
  }

  return res.end('Hello Dev')
})

server.listen(3333)

//localhost:3333