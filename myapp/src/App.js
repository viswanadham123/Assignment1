import {Route,BrowserRouter,Switch} from "react-router-dom"

import Home from "./components/Home"

import Profile from "./components/Profile"

import MedicineReminder from "./components/MedicineRemainder"

import AddMedicine from "./components/AddMedicine"

import UserLogin  from "./components/LoginPage"


import './App.css';

// import { Router } from "react-router-dom/cjs/react-router-dom.min"

import HealthCheck from "./components/HealthCheck"
import HelthTips from "./components/HelthTips"
import ProtectedRoute from "./components/ProtectedRoute"

const App=()=>
(<BrowserRouter>
<Switch>
  <ProtectedRoute exact path="/" component={Home} />
  <ProtectedRoute exact path="/profile" component={Profile}/>
  <ProtectedRoute exact path="/medicine" component={MedicineReminder}/>
  <ProtectedRoute exact path="/add-medicine" component={AddMedicine}/>
  <ProtectedRoute exact path="/health-check" component={HealthCheck}/>
  <Route exact path="/login-page" component={UserLogin}/>
  <ProtectedRoute exact path="/health-tips" component={HelthTips}/>
</Switch>
  
</BrowserRouter>)


export default App;