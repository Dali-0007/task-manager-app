import React, { useEffect, useState } from "react";

const TaskForm = ({ onAddTask, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const today = new Date().toISOString().split("T")[0];

  // If editing, prefill form
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert("Title and Due Date are required.");
      return;
    }

    const newTask = { title, description, priority, dueDate, status };
    onAddTask(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setStatus("Pending");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        {taskToEdit ? "✏️ Edit Task" : "➕ Add Task"}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Form same as before */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Priority</label>
              <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option><option>Medium</option><option>High</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                min={status !== "Completed" ? today : undefined}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Pending</option><option>In Progress</option><option>Completed</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
