const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

mongoose.connect(uri);
