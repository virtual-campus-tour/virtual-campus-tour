import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
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
            <NavDropdown>
              <Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                About UHM
              </Button>
            <Nav.Link id="about-uhm-nav" as={NavLink} to="/about" key="about">About UHM</Nav.Link>
            <Nav.Link id="student-life-nav" as={NavLink} to="/life" key="life">Student Life</Nav.Link>
            <Nav.Link id="department-nav" as={NavLink} to="/department" key="department">Department</Nav.Link>
            <Nav.Link id="interest-nav" as={NavLink} to="/interest" key="interest">Interest</Nav.Link>
            {currentUser ? ([
              <Nav.Link id="my-interests-nav" as={NavLink} to="/myinterests" key="myinterests">My Interests</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="department-Name-admin-nav" as={NavLink} to="/departmentName" key="departmentName">departmentName</Nav.Link>,
              <Nav.Link id="statistics-admin-nav" as={NavLink} to="/stats" key="stats">Statistics</Nav.Link>,
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Administration</Nav.Link>,
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
