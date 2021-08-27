

import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SubHeader from './SubHeader';
import DashboardJumbotron from './DashboardJumbotron';






 const Dashboard = (props) => {

   
   
   

    return (
      <div>
        <Header />
        <SubHeader title="Dashboard" />
        <DashboardJumbotron />
        <Footer />
      </div>
    );
}



export default Dashboard;

 