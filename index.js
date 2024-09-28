const express = require("express") //para poder usar o express
const server = express() //para criar o servidor
const alunos = require("./src/objetos.json") //busca uma lista de objetos no BD (nesse caso o BD é mocado)
const filmes = require("./src/filmes.json")
const series = require("./src/series.json")

//pegando as informações do servidor na porta padrão
server.get("/", (req, ans)=> {
    return ans.json({mensagem: "Hello NODE!"})
})

server.get("/porta1", (req, ans)=> {
    return ans.json({mensagem: "Porta 1"})
})

server.get("/porta2", (req, ans)=> {
    return ans.json({mensagem: "testando o nodemon!!"})
})

server.get("/objetos", (req, ans)=> {
    return ans.json(alunos)
})

server.get("/filmes", (req, ans)=> {
    return ans.json(filmes)
})

server.get("/series", (req, ans)=> {
    return ans.json(series)
})


//escutando o server no endereço 3300
server.listen(3300, ()=> {
    console.log("Server OK")
})