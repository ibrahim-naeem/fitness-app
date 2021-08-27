import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import DietItem  from "./DietItem";
import { store } from "../index";


const DietList = () =>{
    const diet = store.getState().diet;  
    
return (
  <div>
    <Header />
    <SubHeader title="Diet List"  buttonD="Add Diet"/>
    <div className="mt-5 mb-5 ">
      <div className="col-md-8 offset-2 d-flex flex-wrap">
        {diet.map((diet) => {
          return <DietItem key={diet.id} {...diet} />;
        })}
      </div>
    </div>

    <Footer />
  </div>
);
};



export default DietList;
