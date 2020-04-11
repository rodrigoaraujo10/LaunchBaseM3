const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true

})

server.get("/", function(req, res){
    const about = {
        avatar_url: "http://br.web.img3.acsta.net/c_216_288/pictures/16/06/14/19/46/337804.jpg",
        name: "Rodrigo Reis",
        role: "Aluno Rocketseat",
        description: 'Programador Full-Stack, focado em começar no mundo da programação! Estudante da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [ 
            { name: "Github", url:"https://github.com/" },
            { name: "Twitter", url:"https://twitter.com/"},
            { name: "Linkedin", url:"https://linkedin.com/" }


        ]
    }
    
    return res.render("about", { about: about })
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return ( video.id == id )
            
    })

    if ( !video ) {
        return res.send("Video não encontrado. Verifique o ID")
    }

    return res.render("video", { item: video })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id

    return res.send(`O id fornecido na rota é: ${id}`)
})

server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5001, function(){
    console.log('Server is Running')
})