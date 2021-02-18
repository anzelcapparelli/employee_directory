import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import FilterForm from "../FilterForm";

// import API from "../utils/API"

// need to get picture in too

function EmployeeTable() {

    const [empList, setList] = useState([]);
    const [empFilter, setFilter] = useState("");
    const [filterList, setFilterList] = useState ([]);
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
          return;
        }

        const filteredResults = empList.filter(empLeft => empLeft.name.first.indexOf(empFilter) > -1);
        // Set this.state.friends equal to the new friends array
        setFilterList(filteredResults);
        console.log(filterList);

    //     API.searchTerms(search)
    //       .then((res) => {
    //         if (res.data.length === 0) {
    //           throw new Error("No results found.");
    //         }
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
    //         setTitle(res.data[1]);
    //         setUrl(res.data[3][0]);
    //         setError("");
    //       })
    //       .catch((err) => setError(err.message));

    //     // the effect callback will be called every time the value of search changes
      }, [empFilter]);

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