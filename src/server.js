import { unsubscribe } from 'node:diagnostics_channel'
import http from 'node:http'

//O que é um conceito Stateful? 
  // - Sempre vai ter algum dado salvo em memória ou seja caso não tenha nada na memória (depende da memória) vai trabalhar de forma diferente
// O que é um conceito Stateless?
  // - Não salva nada em memória, sempre salva em bancos de dados, arquivos de textos ou exitCode, assim encerrando ela não vai ocorrer problemas justamente por conta disso.

  // JSON - JavaScript Object Notacion, extremamente utilziado para fazer a comunicação entre front-end e back-end usando apenas aplicações e strings

  // Cabeçalhos (Requisições/respostas) ==> Metadados (Como aquele dado pode ser interpretado pelo front-end)

  //Quando usamos o res são dados enviados do back-end para o front-end

  //HTTP Status Code - importancia semantica entre front e back-end para explicar o que é cada erro dentro de uma aplicação

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req


  if (method === 'GET' && url === '/users') {
    return res      
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Henrique Zanella',
      email: 'henriquezanella19@gmail.com',
    })


    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)

//localhost:3333