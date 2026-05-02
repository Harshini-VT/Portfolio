const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://harshvt16_db_user:TeWLEahgIMzSyjOI@ac-9l4crmx-shard-00-00.w7mioz6.mongodb.net:27017,ac-9l4crmx-shard-00-01.w7mioz6.mongodb.net:27017,ac-9l4crmx-shard-00-02.w7mioz6.mongodb.net:27017/?ssl=true&replicaSet=atlas-4p0fcg-shard-0&authSource=admin&appName=portfolio-cluster")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 📦 Schema
const projectSchema = new mongoose.Schema({
  title: String,
  desc: String
});

const Project = mongoose.model("Project", projectSchema);

// ➕ Add sample data (only once)
app.get("/add", async (req, res) => {
  await Project.create({
    title: "🔥 Database Project",
    desc: "Stored in MongoDB"
  });

  res.send("Data added");
});

// 📡 Get data
app.get("/projects", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

// ▶️ Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000/projects");
});