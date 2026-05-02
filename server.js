const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});