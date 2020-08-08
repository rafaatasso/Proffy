const proffys = [
    { 
        name: "Rafaela Tasso", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHWoLh7OEH7HA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=zxO6xmqWcw0HXHnXW7nC77sp-ix5Om7Vc_PDVohUhqA", 
        whatsapp: "48999697574", 
        bio: "Entusiasta das melhores formas de aprenzidado de matemática.<br><br>Apaixonada por saber porque 2 + 2 dá 4 e não 5. Vem descobri como solucionar a incógnita da sua vida matemática.", 
        subject: "Matemática", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [
            720
        ], 
        time_for: [
            1220
        ] 
    },
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "48999307575", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [
            1
        ], 
        time_from: [
            720
        ], 
        time_for: [
            1220
        ] 
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)