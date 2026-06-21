import { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const isValid =
    name.trim() !== "" &&
    department.trim() !== "";

  const handleSubmit = () => {
    if (!isValid) return;

    addEmployee({
      name,
      department,
      active: true
    });

    setName("");
    setDepartment("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
      />

      <button onClick={handleSubmit} disabled={!isValid}>
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeForm;