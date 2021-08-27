import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { connect } from "react-redux";
import { startRemoveDiet } from "../actions/diet";
import { history } from "../routers/AppRouter";


const DietItem = (props) => {
    

    const remove = () => {
      props.startRemoveDiet({ id: props.id });
      history.push("/DietList");
    } 

return (
  <div>

  
    {props.dietName && <Card className="text-center" style={{ width: "270px", margin: "5px" }}>
      <Link
        style={{ textDecoration: "none", color: 'white' }}
        to={`/EditDietFormPage/${props.id}`}
      >
        <Card.Header className='bg-secondary'>
          <h4>{props.dietName}</h4>
          
        </Card.Header>
      </Link>

      <Card.Body>
        
          <Card.Title className="text-dark">Diet Details </Card.Title>
        

        <Card.Text>
          <span className="d-block pb-2">{props.dietOne}</span>
          <span className="d-block pb-2">{props.dietTwo}</span>
          <span className="d-block pb-2">{props.dietThree}</span>
          <span className="d-block pb-2">{props.dietFour}</span>
          <span className="d-block pb-2">{props.dietFive}</span>
        </Card.Text>
        <Button className="btn-dark" onClick={remove}>
          Remove Diet
        </Button>
      </Card.Body>
    </Card>}
  </div>
);
};



const mapDispatchToProps = (dispatch) => ({
  startRemoveDiet: (data) => dispatch(startRemoveDiet(data)),
});




export default connect(undefined, mapDispatchToProps )(DietItem);