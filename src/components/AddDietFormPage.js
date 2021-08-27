import React from "react";

import Header from "./Header";
import SubHeader from "./SubHeader";
import DietForm from "./DietForm";
import Footer from "./Footer";
import { connect } from "react-redux";
import { startAddDiet } from '../actions/diet';
import { history } from "../routers/AppRouter";


export class AddDietFormPage extends React.Component {
  onSubmit = (diet) => {
    this.props.startAddDiet(diet);
    history.push("/DietList");
    
  };
  render() {
    return (
      <div>
        <Header />
        <SubHeader title="Add Diet" backD="Dashboad" />
        <DietForm onClickDietSubmit={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddDiet: (diet) => dispatch(startAddDiet(diet)),
});

export default connect(undefined, mapDispatchToProps)(AddDietFormPage);