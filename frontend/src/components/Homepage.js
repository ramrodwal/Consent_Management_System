import React  from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';



function Homepage(){
        return (
            <Container>
                <Card>
                <Card.Img class="logo" src="logo.png" />
                </Card>
<h2 class="loginas">Login as:</h2>
                <CardGroup>
                <Card>
                <a class="loginpatient"href="/Login.js">
                <Card.Img variant="top" class="loginpatient" src="data:image/png;base64,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" />
                </a>
        <Card.Body>
          <Card.Title>PATIENT</Card.Title>
          </Card.Body>
                </Card>
                <Card>
                <a class="logindoc" href="/Login.js">
                <Card.Img variant="top" class="logindoc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvcveHjjyK1d3v5sNUNfqaz-xAbJLsFyVyQ&usqp=CAU" />
                </a>
        <Card.Body>
          <Card.Title>DOCTOR</Card.Title>
          </Card.Body>
                </Card>
                <Card>
                <a class="loginnominee" href="/Login.js">
                <Card.Img variant="top" class="loginnominee" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbXZH7DM5U-bbtD7FCITcGN5Fn0Sk_cW4ng&usqp=CAU" />
                </a>
        <Card.Body>
          <Card.Title>NOMIEE</Card.Title>
          </Card.Body>
                </Card>
                <Card>
                <a class="loginadmin" href="/Login.js">
                <Card.Img variant="top" class="loginadmin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAYFBMVEX///8AAAA4ODg1NTUyMjK3t7fS0tIgICDAwMAoKCgtLS3c3Nz29vZNTU3h4eGampru7u49PT3Hx8cQEBCoqKhYWFiDg4Pn5+d3d3eOjo5oaGhgYGBCQkIXFxewsLCgoKBM1XvKAAADrUlEQVR4nO2b6XaCMBCFjUKoEjBSlEXU93/LimxhTTI6oT3N99PjwduQZGbuTDcbi8VisVgsFovFYvkgPqXJ2hoqWEoqgsz12cpiLqTDCy7+mlpCj/Q5uWssDwvp/ZjtyYiDcTlhdh3LaMiN7md6nlfy4suclrtEypOHKS1HuRZCjma0uCpaCLmb0MKGh3kOakBMpqiFfOOfcH5SFUMydDFfyloICbHFpHINLSm2mJuGmAPH1cI1tKBfxFRLDPLNp3jj1eS4YmItMTtcMQ8tMQRXjFKQ/Jdi9F7TCVeMQl4lgHya9I42cqjUiZOEuJhSWHiRKxA4U7zo5AdaUkr2MZIWjbxKAOlV6QXJBqSkRm/zNpz/gRjYa0K6+PxviJgLjhheQMRgVZYLLsg8WPWKXppXccKqK/VKgwqkLfMk1xeDV61E2lpuaFo0LIgG1CTC1TreBXJJyaTmYktE8R0a1Y2Dd44EuKKPZsZ+Vcv3DmacabVUAt0pquA7FTGRGTFKZWVhSMtmoyAG9bbrIQ/f5hZGIWKa7MiFEi2G2hg1y8cbqSKYZSl+B8j+75h5C8BDt+nV1RSrdNyn/b3rSt3/aKKqM5I4TJIM75utqYg0Sd9wzNYehjg2MfyWri3lCY/SreME8S8ZW7H8DRj/BXv3RRKfi1MR5NH6gsKut7w3Mv7Qg9GjkMbRXkUnliePO/pZT7Kgl+AOqpauinSfK5ViFpV+XBv27d+cDGJT19Opo1YaoSRa3A280W/6czG7c9y26cfNCDcX04Vz83g2ENMm4r0A6mSfKxYYHU1jtIM6A0ei3SRDc2D/me3M4gnXoX0d/bzcaz6m4/mN/eV9OdNNSa95T0lvadqLZjojvby3eUap3Oh9iGK7a2ZisLHk9E4iyA8zWoRUt6u7g/az4SHrgPsBiTP7UNKteLM2Qi9noa0KVrPka3YPbdpQ3WItNTNvwFO+aHxc268Vo59Z9ENhIwlsdsOUeM1Pd9dbW+4vt4JAAUviI9YNayYcnPqs8OUhMVCfUOKE1xecuFe3VVCU+VoAX0DaBHw90++tQhWaZA07wIGisvZoNvHDpcBhWjECUI5LWwQFH3+p3A/S4SPAppH74HTDRjE0UnDzASabfGwnn1iEHZM3XQBi5Ctz8Cf6Kw/5hA2KGCgAMfrN0T8pBnCapPcMGMiMGmjyQQVIEjGfrr0HbHiPgga+ZEC9We7mzs0r2TccKpyancBWzi7ITPxrhMVisVgsFovlV/EDeqIse3DKo4YAAAAASUVORK5CYII=" />
                </a>
        <Card.Body>
          <Card.Title>ADMIN</Card.Title>
          </Card.Body>
                </Card>
                </CardGroup>
            </Container>

           
             
        )
    }



export default Homepage;