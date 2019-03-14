var mongoose = require("mongoose");

// setup schema
var projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    short: String
});
// make model
var Project = mongoose.model("Project",projectSchema);
module.exports= Project;