import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import DietForm from "./DietForm";
import Footer from "./Footer";
import { connect } from "react-redux";
import { startEditDiet } from "../actions/diet";
import { history } from "../routers/AppRouter";


export class EditDietFormPage extends React.Component {
  onSubmit = (diet) => {

    this.props.startEditDiet(this.props.diet.id, diet);
    history.push("/DietList");
  };

  render() {
    return (
      <div>
        <Header />
        <SubHeader title="Edit Diet" />
        <DietForm diet={this.props.diet} onClickDietSubmit={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  diet: state.diet.find(
    (diet) => diet.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditdiet: (id, diet) => dispatch(startEditDiet(id, diet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDietFormPage);