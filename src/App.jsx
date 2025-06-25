import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import ThemeToggler from "./components/ThemeToggler";
function App() {
  const [tasks, setTasks] = useState(() => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  

  const handleAddTask = (task) => {
    if (taskToEdit) {
      setTasks((prev) =>
        prev.map((t, i) => (i === taskToEdit.index ? task : t))
      );
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleEdit = (index) => {
    setTaskToEdit({ ...tasks[index], index });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure?")) {
      setTasks((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((task) => (filterStatus ? task.status === filterStatus : true))
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );

  return (
    <div className="container mt-4">
      <ThemeToggler />
      <h2 className="mb-4">📝 Task Manager</h2>

      <TaskForm onAddTask={handleAddTask} taskToEdit={taskToEdit} />

      <FilterBar
        searchText={searchText}
        setSearchText={setSearchText}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
