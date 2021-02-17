import React from "react";
// import API from "../utils/API"

// need to get picture in too

function EmployeeCard() {
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
                        src="https://via.placeholder.com/150"
                    />
                </td>
                <td>John Smith</td>
                <td>test@test.com</td>
                <td>1-234-5678</td>
                <td>1-876-5432</td>
            </tr>
        </table>
    )
}


export default EmployeeCard;