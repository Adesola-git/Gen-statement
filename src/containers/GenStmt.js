import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./GenStmt.css";
//import DatePicker from 'react-date-picker';
//import "react-datepicker/dist/react-datepicker.css";

export default function GenStmt() {
  const [acctNum, setAcctNum] = useState("");
  //const [startDate, setStartdate] = useState(new Date());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chargeFlg, setChargeFlg] = useState("");
 /* const [state, setState] = React.useState({
    acctNum: "",
    startDate: new Date(),
    endDate: new Date(),
    chargeFlg: ""
  })*/

 /* function validateForm() {
    return acctNum.length > 0 && startDate.length > 0;
  }*/

  function handleSubmit(event) {
    event.preventDefault();
  }
 
  /*function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleChangeDate(date) {
    this.setState({
      startDate: date
    })
  }*/

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="accountNum" bsSize="large">
          <ControlLabel>Account Number</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={acctNum}
            onChange={e => setAcctNum(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="startDate" bsSize="large">
          <ControlLabel>Start Date</ControlLabel>
          <FormControl
            
            type="text"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup controlId="endDate" bsSize="large">
          <ControlLabel>End Date</ControlLabel>
          <FormControl
            
            type="text"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="chargeFlg" bsSize="large">
          <ControlLabel>Charge Flag</ControlLabel>
          <FormControl componentClass="select" placeholder="chargeFlg"
          name="chargeFlg" onChange={e => setChargeFlg(e.target.value)} 
          value={chargeFlg}
                // inputRef={(ref) => { this.state.groupSelect = ref }}
                 //onChange={this.groupSelect}
                 >
       <option value="Y">Yes</option>
        <option value="N">No</option>
        
    </FormControl>
        </FormGroup>

        <Button block bsSize="large"  type="submit">
          Generate Statement
        </Button>
      </form>
    </div>
  );
}