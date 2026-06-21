const EmployeeSearch = ({ search, setSearch}) => {
    return (
        <input 
            value = {search}
            onChange = {(event) => setSearch(event.target.value)}
            placeholder = "Search employees here"
        />
    );
}

export default EmployeeSearch;