const db = require("../db");

/*
 Retrieves all tasks from the database, ordered by their creation date in descending order
*/
const getTasks = async () => {
  const res = await db.query(
    // everything --> *
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

/*
 Inserts a new task into the database with the given title and description
  The task is initially marked as not complete, and the current timestamp is used for created_at
*/
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
