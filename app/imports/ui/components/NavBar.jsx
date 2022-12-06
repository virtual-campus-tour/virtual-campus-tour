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
        <Navbar.Brand as={NavLink} to="/">
          <h2>UH Campus Tour</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-evenly">
            <NavDropdown id="about-uhm-nav" title="About UHM">
              <NavDropdown.Item id="general-nav" as={NavLink} to="/general">
                General
              </NavDropdown.Item>
              <NavDropdown.Item id="financial-info-nav" as={NavLink} to="/financial-information">
                Financial Information
              </NavDropdown.Item>
              <NavDropdown.Item id="scholarship-nav" as={NavLink} to="/Scholarship">
                Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item id="buildings-nav" as={NavLink} to="/buildings">
                Buildings
              </NavDropdown.Item>
              <NavDropdown.Item id="book-a-tour-nav" as={NavLink} to="/book-a-tour">
                Book A Tour
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="student-life-nav" title="Student Life">
              <NavDropdown.Item id="dining-nav" as={NavLink} to="/dining">
                Dining
              </NavDropdown.Item>
              <NavDropdown.Item id="study-areas-nav" as={NavLink} to="/study-areas">
                Study Areas
              </NavDropdown.Item>
              <NavDropdown.Item id="wrc-nav" as={NavLink} to="/warrior-recreation-center">
                Warrior Recreation Center
              </NavDropdown.Item>
              <NavDropdown.Item id="uh-sports-nav" as={NavLink} to="/athletics">
                Athletics
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown id="colleges-nav" title="Colleges"> */}
            {/*  <NavDropdown.Item id="college-of-natural-sciences-nav" as={NavLink} to="/college-of-natural-sciences"> */}
            {/*    College of Natural Sciences */}
            {/*  </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link id="ics-department-nav" as={NavLink} to="/ICSDepartment">
              ICS Department
            </Nav.Link>
            {currentUser ? ([
              <Nav.Link id="my-interests-nav" as={NavLink} to="/my-interests">
                My Interests
              </Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-edit-user" as={NavLink} to={`/edit/${currentUser}`}>
                  <BoxArrowRight />
                  {' '}
                  Edit
                  User
                </NavDropdown.Item>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
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
