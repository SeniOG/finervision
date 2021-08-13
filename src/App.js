import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Container from "./components/Container";
import Dropdown from "./components/Dropdown.jsx";


function App() {
 return (
  <Container>
     <Accordion
       title="Step 1: Your details">
       <div className="form-container">
        <div className="form">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>Surname</label>
          <input type="text" />
        </div>
        <br/>
        <div className="form">
          <label>Email Address:</label>
          <input type="text" />
        </div>
      </div>
     </Accordion>
    <Accordion
       title="Step 2: More comments">
       <div className="form-container">
        <div className="form">
          <label>Telephone number</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>Gender</label>
          <Dropdown /> {/*custom drop down menu*/}
        </div>
        <div className="form-container">
       <div className="dob-form-title">Date of Birth</div>
        <div className="form dob-form">
          <input type="text"/>
        </div>
        <div className="form dob-form">
          <input type="text" />
        </div>
        <div className="form dob-form">
          <input type="text" />
        </div>
      </div>
      </div>
    </Accordion>
    <Accordion
       title="Step 3: Final comments">
       <div className="form-container">
        <div className="Comments">
          <label>Comments</label>
          <input type="text" />
        </div>
      </div>
    </Accordion>
  </Container>
 );
}

export default App;
