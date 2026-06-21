const EmployeeFilters = ({
  showActiveOnly,
  setShowActiveOnly,
  showHROnly,
  setShowHROnly,
  resetFilters
}) => {
  return (
    <div>
      <button onClick={() => setShowActiveOnly(prev => !prev)}>
        Toggle Active Filter
      </button>

      <button onClick={() => setShowHROnly(prev => !prev)}>
        Toggle HR Filter
      </button>

      <button onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default EmployeeFilters;