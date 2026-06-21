import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeFilters from './components/EmployeeFilters';
import EmployeeForm from './components/EmployeeForm';
import { useState, useEffect, useCallback } from "react";
import EmployeeSearch from './components/EmployeeSearch';


function App() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [showHROnly, setShowHROnly] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departmentFilter, setDepartmentFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    const response = await fetch("http:localhost:5000/employees");

    const data = await response.json();

    return data;
  };

//Functions defined inside components are recreated each render,
//so they must be included in dependency arrays or stabilized using useCallback.
//Must make it stable
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
  

  let visibleEmployees = employees;

  if(showActiveOnly){
    visibleEmployees = visibleEmployees.filter((employee => employee.active));
  }

  if (departmentFilter !== "ALL") {
  visibleEmployees = visibleEmployees.filter(
    e => e.department === departmentFilter)
  };

  if(showHROnly){
    visibleEmployees = visibleEmployees.filter((employee => employee.department === "HR"))
  };

  let resetFilters = () => {
    setShowActiveOnly(false);
    setShowHROnly(false);
  };


  if(search.trim() !== ""){
    visibleEmployees = visibleEmployees.filter(e =>
      e.name.toLowerCase().includes(search.toLowerCase()));
  }

  const addEmployee = (newEmployee) => {
    setEmployees(prev => [
      ...prev, newEmployee
    ])};

  return (
    <div className="App">
      
      <EmployeeFilters
        showActiveOnly={showActiveOnly}
        setShowActiveOnly={setShowActiveOnly}
        showHROnly={showHROnly}
        setShowHROnly={setShowHROnly}
        resetFilters={resetFilters}
      />

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeSearch
        search = {search}
        setSearch = {setSearch}
      />
      
      {loading ? <p>Loading...</p> :
      error ? <div>
        <p style = {{ color: "red"}}>Failed to load employees: {error}</p>
        <button onClick = {loadEmployees} disabled = {loading}>
          Retry
        </button>
        </div>
       :
      <EmployeeList employees={visibleEmployees} />}
    </div>
  );
}

export default App;
