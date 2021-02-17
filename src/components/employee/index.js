import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
// import API from "../utils/API"

// need to get picture in too

function EmployeeCard() {

    const [empList, setList] = useState([]);
    // const [error, setError] = useState("");


    // 
    useEffect(() => {
        API.search()
        .then((res) => {
            console.log(res);
            setList(res.data.results);
        })
          
    }, []);

    return (
        <table style={{ "width": "100%" }}>
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Cell</th>
            </tr>

            <tr>
                <td>
                    <img
                        alt="placeholder"
                        src={empList[0].picture.thumbnail}
                    />
                </td>
                <td>{empList[0].name.first}</td>
                <td>{empList[0].email}</td>
                <td>{empList[0].phone}</td>
                <td>{empList[0].cell}</td>
            </tr>
        </table>
    )
}


export default EmployeeCard;