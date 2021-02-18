import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import API from "../utils/API";
import FilterForm from "../FilterForm";


function EmployeeTable() {

    const [empList, setList] = useState([]);
    // const [simpleList, setSimple] = useState([]);
    const [empFilter, setFilter] = useState("");
    const [filterList, setFilterList] = useState([]);
    const [sorted, setSorted] = useState(false);
    // const [error, setError] = useState("");

    useEffect(() => {
        API.search()
            .then((res) => {
                // console.log(res);
                setList(res.data.results);
                setFilterList(res.data.results);
            })
    }, []);

    useEffect(() => {
        if (!empFilter) {
            return setFilterList(empList);
        }

        const filteredResults = empList.filter(empLeft => empLeft.name.first.toLowerCase().indexOf(empFilter.toLowerCase()) > -1);
        console.log(filteredResults);

        setFilterList(filteredResults);
        // console.log(filterList);

    }, [empFilter]);

    useEffect(() => {

        const updatefilter = filterList.sort(function (a, b) {
            var x = a.email.toLowerCase();
            var y = b.email.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
        setFilterList(updatefilter);

    }, [sorted]);

    const handleInputChange = (event) => setFilter(event.target.value);

    const handleSortChange = (event) => setSorted(!sorted);


    return (
        <div>

            <FilterForm handleInputChange={handleInputChange} empFilter={empFilter} />
            <p>Double-Click the email header to sort alphabetically!</p>
            <table style={{ "width": "100%" }}>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th
                            onClick={handleSortChange}
                        >
                            Email</th>
                        <th>Phone</th>
                        <th>Cell</th>
                    </tr>
                </thead>
                <tbody>
                    {filterList.map(emp =>
                        <tr key={emp.email}>
                            <td>
                                <img
                                    alt="placeholder"
                                    src={emp.picture.thumbnail}
                                />
                            </td>
                            <td>{emp.name.first} {emp.name.last}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.cell}</td>
                        </tr>)}
                </tbody>
            </table>

        </div>
    )



}


export default EmployeeTable;




// empList.map(emp =>
//     let newObj = {
//     "picture": emp.picture.thumbnail,
//     "name": `${emp.name.first} ${emp.name.last}`,
//     "email": emp.email,
//     "phone": emp.phone,
//     "cell": emp.cell,
// }
// return newObj;
// )

// ^^^ was trying to add a easier object to filter from!