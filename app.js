var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    Project = require("./models/project.js");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb://localhost:27017/cesarPortfolio",{useNewUrlParser: true});

app.get("/",(req,res)=>{
    // res.send("main page portfolio");
        Project.findOne({name:"Contempo Installation"},(err,foundProject)=>{
            res.render("index",{project:foundProject});
        });
});

// Project.create({
//     name: "Contempo Installation",
//     image: "https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
//     description: "First contemporaty art installation in austin texas",
//     short: "First installation"
// },(err,project)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("project added");
//         console.log(project);
//     }
// });
// https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80

app.listen(port,(req,res)=>{
    console.log("serving Cesar Portfolio");
});