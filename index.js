const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const projects = [
  {
    title: "Projects",
    icon: null,
    count: 18,
    completed: 2,
  },
  {
    title: "Active Task",
    icon: null,
    count: 132,
    completed: 28,
  },
  {
    title: "Teams",
    icon: null,
    count: 12,
    completed: 1,
  },
  {
    title: "Productivity",
    icon: null,
    count: "76%",
    completed: "5%",
  },
];

app.get("/get_projects", (req, res) => {
  console.log(projects);
  res.send(projects);
});

app.get("/get_2projects", (req, res) => {
  console.log(projects);
  res.send(projects.slice(2));
});

app.listen(5000, () => {
  console.log("server started");
});
