import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;