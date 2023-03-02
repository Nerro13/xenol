const exp = require("express")
const server = exp()
server.set("view engne", "ejs")
server.get("/", (req, res)=>{
    res.render("home")
})
server.get("/login", (req, res)=>{
    res.render("login")
})
server.get("/register", (req, res)=>{
    res.render("register")
})
server.get("/about", (req, res)=>{
    res.render("here we go")
})
server.listen(3000, () => {
    console.log("server listening on port 3000")
})