import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import Department from '../pages/Department';
import Dining from '../pages/Dining';
import Dorming from '../pages/Dorming';
import General from '../pages/General';
import MyInterests from '../pages/MyInterests';
import EditUser from '../pages/EditUser';
import Scholarship from '../pages/Scholarship';
import GeneralTour from '../pages/GeneralTour';
import Athletics from '../pages/Athletics';
import CampusCenter from '../pages/CampusCenter';
import StudyAreas from '../pages/StudyAreas';
import EditClubs from '../pages/EditClubs';
import ListClubs from '../pages/ListClubs';
import WarriorRecreationCenter from '../pages/WarriorRecreationCenter';
import AddClubs from '../pages/AddClubs';
import DormingTour from '../pages/DormingTour';
import DiningTour from '../pages/DiningTour';
import Classrooms from '../pages/Classrooms';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/ICSDepartment" element={<Department />} />
        <Route path="Classrooms" element={<Classrooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/Dorming" element={<Dorming />} />
        <Route path="/DormingTour" element={<DormingTour />} />
        <Route path="/DiningTour" element={<DiningTour />} />
        <Route path="/Scholarship" element={<Scholarship />} />
        <Route path="/GeneralTour" element={<GeneralTour />} />
        <Route path="/campuscenter" element={<CampusCenter />} />
        <Route path="/Athletics" element={<Athletics />} />
        <Route path="/warrior-recreation-center" element={<WarriorRecreationCenter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/study-areas" element={<StudyAreas />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/general" element={<General />} />
        <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
        <Route path="/my-interests" element={<ProtectedRoute><MyInterests /></ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><AddClubs /></ProtectedRoute>} />
        <Route path="/edit/:email" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
        <Route path="/editClubs/:_id" element={<AdminProtectedRoute><EditClubs /></AdminProtectedRoute>} />
        <Route path="/listClubs" element={<ProtectedRoute><ListClubs /></ProtectedRoute>} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};
/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};
// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
ProtectedRoute.defaultProps = {
  children: <Landing />,
};
// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
AdminProtectedRoute.defaultProps = {
  children: <Landing />,
};
export default App;
