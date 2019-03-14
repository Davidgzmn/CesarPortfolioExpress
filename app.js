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

app.get("/projects",(req,res)=>{
    // res.send("main page portfolio");
    Project.find((err,foundProjects)=>{
        res.render("index",{projects:foundProjects})
    });
});

// Project.create({
//     name: "Outdoor experience",
//     image: "https://images.unsplash.com/photo-1467989034424-82d77e6fe0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
//     description: "Outdoor exhibition in Guadalajara Jalisco, utilizing floral patterns and seed packets to create a sense of wonder and congitive dissonance with the hardcore-punk music serving as a backdrop",
//     short: "Outdoor plants and noise exhibition"
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