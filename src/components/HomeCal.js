import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from 'react-bootstrap';
import { store } from "../index";
import { database } from "../firebase/firebase";


class HomeCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      weight: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      bmr: "",
    };

    this.calculateBMR = this.calculateBMR.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let gender = this.state.gender;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let weight = this.state.weight;

    const uid = store.getState().auth.uid;
    const trainer = localStorage.getItem("trainer");
    

    let height = heightFeet * 30.48 + heightInches * 2.54;

    
    if (gender == 2) {
      var claories = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      if (uid) {
        if (trainer) {
          database.ref(`trainers/${uid}/user-data`).update({
            claories,
          });
        } else {
          database.ref(`users/${uid}/user-data`).update({
            claories,
          });
        } 
      } 
    } else if (gender == 1) {
      claories = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      if (uid) {
        if (trainer) {
          database.ref(`trainers/${uid}/user-data`).update({
            claories,
          });          
        } else {
         database.ref(`users/${uid}/user-data`).update({
           claories,
         });
 
        }
      }  
    }

    return claories;
  }

  // if(trainer){
  //          database.ref(`trainers/${uid}/user-data`).update({
  //           claories,
  //         });

  //       }else{
  //         database.ref(`users/${uid}/user-data`).update({
  //           claories,
  //         });
  //     } 

  handleShow() {
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
    let result = this.calculateBMR();

    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    return (
      <div id="bmrcalc" className="col-sm-8">
        <div className="form">
          <h2>Calorie Calculator</h2>
          {error}
          <div className="inputwrap">
            <legend>Weight</legend>

            <input
              type="number"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="weight form-control"
              min="0"
              max="999"
            />
            <label className="control-label">lb</label>
          </div>
          <div className="inputwrap">
            <legend>Height</legend>
            <input
              type="number"
              value={this.state.heightFeet}
              onChange={this.handleheightFeetChange}
              name="heightFeet"
              className="heightFeet form-control"
              min="0"
              max="8"
            />
            <label className="control-label">ft</label>
            <input
              type="number"
              value={this.state.heightInches}
              onChange={this.handleheightInchesChange}
              name="heightInches"
              className="heightInches form-control"
              min="0"
              max="11"
            />
            <label className="control-label">in</label>
          </div>
          <div className="inputwrap">
            <legend>Age</legend>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age form-control"
              name="age"
              min="0"
              max="120"
            />
            <label className="control-label">years</label>
          </div>
          <div className="inputwrap">
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "1"}
                onChange={this.handlegenderChange}
                className="genderF "
                name="gender"
                value="1"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "2"}
                onChange={this.handlegenderChange}
                className="genderM"
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          <div className="mt-3">
            <Button variant="secondary" onClick={this.handleShow}>
              Calculate
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header>
                <Modal.Title>Your Daily Calories:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{result}</h4>
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
    );
  }
}

const mapStateToProps = (state) => ({
  auth : state.auth,
})

export default connect(mapStateToProps)(HomeCal);
