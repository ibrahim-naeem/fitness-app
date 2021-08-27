
import React from "react";
import { Button, Modal } from 'react-bootstrap';
import { database } from '../firebase/firebase.js';
import { store } from '../index';





class HomeBmi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heightFeet: "",
      heightInch: "",
      weight: "",
      result: "",
      show: false,
    };

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


  }

  handleHeightFeetChange(event) {
    this.setState({
      heightFeet: event.target.value,
    });
  }

  handleHeightInchChange(event) {
    this.setState({
      heightInch: event.target.value,
    });
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value,
    });
  }

  calculateBMI( ) {
    if (this.state.weight && this.state.heightFeet && this.state.heightInch) {
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      let INCHES_IN_FEET = 12;

      var height = Number(this.state.heightFeet);
      // convert feet to inches
      height *= INCHES_IN_FEET;
      // add the inches input field
      height += Number(this.state.heightInch);

      let weight = this.state.weight;

      var bmi = (weight / (height * height)) * 703;
      bmi = bmi.toFixed(2);


      const uid = store.getState().auth.uid;
      const trainer = localStorage.getItem("trainer");
      if (uid) {

        if (trainer) {
           database.ref(`trainers/${uid}/user-data`).update({
             bmi,
           });
        } else {
           database.ref(`users/${uid}/user-data`).update({
             bmi,
           });
        }      
      }     
  
      return bmi;
    }
  }

  getBMIResults(bmi) {
    var bmiResultsLabel;

    if (bmi <= 18.5) {
      bmiResultsLabel = "Underweight";
    } else if (bmi <= 24.9) {
      bmiResultsLabel = "Normal weight";
    } else if (bmi <= 29.9) {
      bmiResultsLabel = "Overweight";
    } else if (bmi >= 30) {
      bmiResultsLabel = "Obesity";
    }


  

    return bmiResultsLabel;
  }

  handleShow( ) {
    this.setState({
      show: true,
    });
  }
  

  handleClose() {
    this.setState({
      show: false,
    });
  }
  
  

  render() {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
      <div className="App container">
        <div className="row">
          <div className="">
            <h1>BMI Calculator</h1>
            <p>Enter your weight and height below.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <form>
              <div className="form-group">
                <legend>Weight</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      id="bmiWeight"
                      type="number"
                      min="1"
                      max="1000"
                      value={this.state.weight}
                      onChange={this.handleWeightChange}
                    />
                    <label className="control-label" htmlFor="bmiWeight">
                      lb
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <legend>Height</legend>
                <div className="row">
                  <div className="col-xs-6">
                    <input
                      className="form-control"
                      id="bmiHeightFeet"
                      type="number"
                      min="1"
                      max="12"
                      value={this.state.heightFeet}
                      onChange={this.handleHeightFeetChange}
                    />
                    <label className="control-label" htmlFor="bmiHeightFeet">
                      ft
                    </label>
                  </div>
                  <div className="col-xs-6">
                    <input
                      className="form-control"
                      id="bmiHeightInch"
                      type="number"
                      min="0"
                      max="12"
                      value={this.state.heightInch}
                      onChange={this.handleHeightInchChange}
                    />
                    <label className="control-label" htmlFor="bmiHeightInch">
                      in
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-3">
              <Button variant="secondary" onClick={this.handleShow}>
                Calculate
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title>Your BMI result:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>{bmi}</h4>
                  <p>{results}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HomeBmi;




