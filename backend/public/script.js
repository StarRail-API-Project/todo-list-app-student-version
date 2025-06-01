document.addEventListener('DOMContentLoaded', function() {
    const changeBgButton = document.getElementById('colour_button');
    changeBgButton.addEventListener('click', function() {
        document.body.classList.toggle('black-background');
    });
});


document.getElementById("taskForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  loadTasks();
});

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `${task.title}: ${task.description}`;
    list.appendChild(li);
  });
}

loadTasks();
