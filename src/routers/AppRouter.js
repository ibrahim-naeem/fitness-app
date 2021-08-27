
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from "../components/Login";
import Home from "../components/Home";
import Dashboard  from "../components/Dashboard";
import { PoseCalc } from '../components/PoseCalc';
import AddDietFormPage from '../components/AddDietFormPage';
import AddWorkoutFormPage from "../components/AddWorkoutFormPage";
import EditWorkoutFormPage from "../components/EditWorkoutFormPage";
import EditDietFormPage from "../components/EditDietFormPage";
import NotFoundPage from "../components/NotFoundPage";
import WorkoutList from '../components/WorkoutList';
import DietList from '../components/DietList';




export const history = createBrowserHistory();


const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Login} exact={true} />
      <Route path="/Home" component={Home} exact={true} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/AddDietFormPage" component={AddDietFormPage} />
      <Route path="/WorkoutList" component={WorkoutList} />
      <Route path="/DietList" component={DietList} />
      <Route path="/AddWorkoutFormPage" component={AddWorkoutFormPage} />
      <Route path="/EditWorkoutFormPage/:id" component={EditWorkoutFormPage} />
      <Route path="/EditDietFormPage" component={EditDietFormPage} />
      <Route path="/PoseCalc" component={PoseCalc} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);


export default AppRouter;
