import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks found. Add one!</p>;

  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Title</th><th>Description</th><th>Priority</th><th>Due Date</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, idx) => (
          <tr key={idx}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.priority}</td>
            <td>{task.dueDate}</td>
            <td>{task.status}</td>
            <td>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(idx)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(idx)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
