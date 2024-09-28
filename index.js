const express = require("express") //para poder usar o express
const server = express() //para criar o servidor
const alunos = require("./src/objetos.json") //busca uma lista de objetos no BD (nesse caso o BD é mocado)

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


//escutando o server no endereço 3300
server.listen(3300, ()=> {
    console.log("Server OK")
})