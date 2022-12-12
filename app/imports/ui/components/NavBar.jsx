import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" key="/">
          <img
            src="/images/VirtualCampusTour.png"
            height="40"
            className="d-inline-block align-top"
            alt="Virtual Campus Tour"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-evenly">
            <NavDropdown id="about-uhm-nav" title="About UHM">
              <NavDropdown.Item id="general-nav" as={NavLink} to="/general" key="general">
                General
              </NavDropdown.Item>
              <NavDropdown.Item id="admissions-nav" as={NavLink} to="/Admission" key="Admission">
                Admissions
              </NavDropdown.Item>
              <NavDropdown.Item id="scholarship-nav" as={NavLink} to="/Scholarship" key="Scholarship">
                Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item id="buildings-nav" as={NavLink} to="/post-building" key="post-building">
                Buildings
              </NavDropdown.Item>
              <NavDropdown.Item id="classrooms-nav" as={NavLink} to="/Classrooms" key="Classrooms">
                Classrooms
              </NavDropdown.Item>
              <NavDropdown.Item id="book-a-tour-nav" href="https://manoa.hawaii.edu/admissions/visit/" key="book-a-tour">
                Book A Tour
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="student-life-nav" title="Student Life">
              <NavDropdown.Item id="dorming-nav" as={NavLink} to="/dorming" key="dorming">
                Dorming
              </NavDropdown.Item>
              <NavDropdown.Item id="dining-nav" as={NavLink} to="/dining" key="dining">
                Dining
              </NavDropdown.Item>
              <NavDropdown.Item id="study-areas-nav" as={NavLink} to="/study-areas" key="study-areas">
                Study Areas
              </NavDropdown.Item>
              <NavDropdown.Item id="CampusCenter-areas-nav" as={NavLink} to="/CampusCenter" key="CampusCenter">
                Campus Center
              </NavDropdown.Item>
              <NavDropdown.Item id="wrc-nav" as={NavLink} to="/warrior-recreation-center" key="warrior-recreation-center">
                Warrior Recreation Center
              </NavDropdown.Item>
              <NavDropdown.Item id="uh-sports-nav" as={NavLink} to="/athletics" key="athletics">
                Athletics
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown id="colleges-nav" title="Colleges"> */}
            {/*  <NavDropdown.Item id="college-of-natural-sciences-nav" as={NavLink} to="/college-of-natural-sciences"> */}
            {/*    College of Natural Sciences */}
            {/*  </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link id="ics-department-nav" as={NavLink} to="/ICSDepartment" key="ICSDepartment">
              ICS Department
            </Nav.Link>
            {currentUser ? ([
              <Nav.Link id="my-interests-nav" as={NavLink} to="/my-interests" key="my-interests">
                My Interests
              </Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <NavDropdown id="administrative" title="Administrative">
                <NavDropdown.Item id="add-club" as={NavLink} to="/add" key="add">
                  Add Club
                </NavDropdown.Item>
                <NavDropdown.Item id="list-club" as={NavLink} to="/listClubs" key="listClubs">
                  List of Club
                </NavDropdown.Item>
              </NavDropdown>,
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin" key="signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup" key="signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-edit-user" as={NavLink} to={`/edit/${currentUser}`} key="edit">
                  <BoxArrowRight />
                  {' '}
                  Edit
                  User
                </NavDropdown.Item>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout" key="signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
