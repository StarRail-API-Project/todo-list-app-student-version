const express = require("express");
const router = express.Router();
// fixed path 
const taskModel = require("../models/taskModel");

/*Handles a GET request to top of main 
when data is received it is returned as a JSON response 
*/
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

/*Handles a POST request to top of main 
after the task is successfully added it sends back a newly created task object
with a 201 status code.
*/
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
  res.status(201).json(task);
});

module.exports = router;
