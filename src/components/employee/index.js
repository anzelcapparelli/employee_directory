import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import FilterForm from "../filter_form";

// import API from "../utils/API"

// need to get picture in too

function EmployeeTable() {

    const [empList, setList] = useState([]);
    const [empFilter, setFilter] = useState("");
    // const [error, setError] = useState("");

    useEffect(() => {
        API.search()
            .then((res) => {
                // console.log(res);
                setList(res.data.results);
            })
    }, []);


      const handleInputChange = (event) => setFilter(event.target.value);

    return (
        <div>

            <FilterForm handleInputChange={handleInputChange} empFilter={empFilter} />

            <table style={{ "width": "100%" }}>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cell</th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map(emp =>
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