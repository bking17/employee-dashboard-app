import './App.css';
import { useState, useEffect, useCallback } from "react";
// import EmployeeList from "./EmployeeList";
// import EmployeeFilters from "./EmployeeFilters";
// import EmployeeForm from "./EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const fetchEmployees = () => {
    return Promise.resolve([
      { id: 1, name: "Alice", department: "Engineering", active: true },
      { id: 2, name: "Bob", department: "HR", active: false },
      { id: 3, name: "Charlie", department: "Finance", active: true }
    ]);
  };

  const loadEmployees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);
  
  return (
    <div className="App">
      Employee Dashboard App
    </div>
  );
}

export default App;
