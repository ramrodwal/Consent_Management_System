import React from "react";

import Card from "react-bootstrap/Card";


function HospitalHome(){
    return(
        <>
        
            <h1>Hospital Home</h1>
            <container>
                <Card>
                <a class="logindoc" href="/BookAppointmentDoctor">
                    Book Appointment
                    </a>
                </Card>
                <Card>
                <a class="logindoc" href="/DoctorLogin">
                    Doctor's Login
                    </a>
                </Card>
                <Card>
                <a class="logindoc" href="/AdminLogin">
                    Admin Login
                    </a>
                </Card>
            </container>

        </>

    );
}

export default HospitalHome;