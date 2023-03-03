const exp = require("express");
const server = exp();
server.set("view engine", "ejs");
server.use(exp.static("public"));
server.use(exp.urlencoded({ exended: true })); //body parser
server.get("/", (req, res) => {
  res.render("home");
});
server.get("/login", (req, res) => {
  res.render("login");
});
server.get("/register", (req, res) => {
  res.render("register");
});
server.get("/about", (req, res) => {
  res.render("about");
});
server.post("/register", (req, res) => {
  //get data submitted
  //validate the data
  //if valid save data to db
  //if not valid, render register page with an error
  console.log(req.body);
  if (req.body.password === req.body.confirm_password) {
    registered = true;
  } else {
    registered = false;
  }
  // let registered = true;
  if (registered) {
    res.render("login", { message: "successful registration" });
  } else {
    res.render("register", {
      message: "password and confirm assword are wrong",
    });
  }
});
server.listen(3000, () => {
  console.log("server listening on port 3000");
});
