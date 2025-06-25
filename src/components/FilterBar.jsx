import React from "react";

const FilterBar = ({ searchText, setSearchText, filterStatus, setFilterStatus, sortOrder, setSortOrder }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">📅 Sort by Due Date: Asc</option>
          <option value="desc">📅 Sort by Due Date: Desc</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
