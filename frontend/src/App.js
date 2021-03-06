import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

const App = () => {

  var CurrentPage;
  var CurrentNav;

  switch (window.location.pathname) {
    case "/":
      CurrentPage = Home;
      CurrentNav = "/";
      break;
    case "/SEPractice":
      CurrentPage = SEPractice;
      CurrentNav = "/SEPractice";
      break;
    case "/SubmitArticle":
      CurrentPage = SubmitArticle;
      CurrentNav = "/SubmitArticle";
      break;
    case "/404":
      CurrentPage = NotFoundPage;
      CurrentNav = "/404";
      break;
    default:
      CurrentPage = NotFoundPage;
      CurrentNav = "/404";
      window.location.pathname = "/404";
  }

  return (
    <Router forceRefresh>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink to="/SEPractice" >Select the Practice</NavLink></li>
          <li><NavLink to="/SubmitArticle" >Submit an Article</NavLink></li>

        </ul>
        <div className="content">
          <Route exact path={CurrentNav} component={CurrentPage} />
        </div>
      </div>
    </Router>
  )

}
export default App;