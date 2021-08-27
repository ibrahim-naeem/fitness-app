import React from "react";
import { Container, Form, Button     } from 'react-bootstrap';

class DietForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dietName: this.props.diet ? this.props.diet.dietName : "",
      dietOne: this.props.diet ? this.props.diet.dietOne : "",
      dietTwo: this.props.diet ? this.props.diet.dietTwo : "",
      dietThree: this.props.diet ? this.props.diet.dietThree : "",
      dietFour: this.props.diet ? this.props.diet.dietFour : "",
      dietFive: this.props.diet ? this.props.diet.dietFive : "",
    };
  }

  dietName = (e) => {
    const dietName = e.target.value;
    this.setState(() => ({ dietName }));
  };
  dietOne = (e) => {
    const dietOne = e.target.value;
    this.setState(() => ({ dietOne }));
  };
  dietTwo = (e) => {
    const dietTwo = e.target.value;
    this.setState(() => ({ dietTwo }));
  };
  dietThree = (e) => {
    const dietThree = e.target.value;
    this.setState(() => ({ dietThree }));
  };
  dietFour = (e) => {
    const dietFour = e.target.value;
    this.setState(() => ({ dietFour }));
  };
  dietFive = (e) => {
    const dietFive = e.target.value;
    this.setState(() => ({ dietFive }));
  };

  submitDietForm = (e) => {
    e.preventDefault();


    
    this.props.onClickDietSubmit({
            dietName: this.state.dietName,
      dietOne: this.state.dietOne,
      dietTwo: this.state.dietTwo,
      dietThree: this.state.dietThree,
      dietFour: this.state.dietFour,
      dietFive: this.state.dietFive,
    });
  };






  render() {
    return (
      <div>
        <Container>
          <div className="col-md-6 offset-3 mt-5 mb-5">
            <h1 className="text-center">Diet Form</h1>

            <Form.Group>
              <Form.Label>Diet Name</Form.Label>
              <Form.Control
                type="text"
                onChange={this.dietName}
                value={this.state.dietName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Diet One</Form.Label>
              <Form.Control
                type="text"
                onChange={this.dietOne}
                value={this.state.dietOne}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Diet Two</Form.Label>

              <Form.Control
                type="text"
                onChange={this.dietTwo}
                value={this.state.dietTwo}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Diet Three</Form.Label>
              <Form.Control
                type="text"
                onChange={this.dietThree}
                value={this.state.dietThree}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Diet Four</Form.Label>
              <Form.Control
                type="text"
                onChange={this.dietFour}
                value={this.state.dietFour}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Diet Five</Form.Label>
              <Form.Control
                type="text"
                onChange={this.dietFive}
                value={this.state.dietFive}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                onClick={this.submitDietForm}
                className="mt-3 btn-lg "
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default DietForm;


