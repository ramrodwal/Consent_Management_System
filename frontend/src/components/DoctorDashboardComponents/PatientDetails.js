import React from "react";

function PatientDetails(){
    return(
        <>
            <h3>Patient's Details</h3>

            <container>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>DOB</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Username</td>
                        <td>Phone Number</td>
                        <td>State</td>
                        <td>City</td>
                        <td>Zip Code</td>
                        <td>Address</td>
                    </tr>
                </table>

            </container>
        </>
    );
}

export default PatientDetails;