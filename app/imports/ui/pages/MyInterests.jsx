import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
// import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Club from '../components/Club';
import { Clubs } from '../../api/club/Clubs';
import { StudentData } from '../../api/studentdata/StudentData';

const MyInterests = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, clubs, students } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Club documents.
    const subscription = Meteor.subscribe(Clubs.userPublicationName);
    const subscription2 = Meteor.subscribe('StudentData');
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Club documents
    const clubItems = Clubs.collection.find({}).fetch();
    const studentDoc = StudentData.find().fetch();
    // const studentClubs = studentDoc.clubs;
    // studentClubs.forEach((club) => {
    //   console.log(_.where(clubItems, { name: club }));
    // });
    // console.log(clubItems);
    return {
      clubs: clubItems,
      students: studentDoc,
      ready: rdy,
    };
  }, []);
  const myClubs = [];
  if (ready) {
    const studentDoc = _.find(students, s => s.email === Meteor.user().username);
    const studentClubs = studentDoc.clubs;
    studentClubs.forEach((club) => {
      myClubs.push(_.findWhere(clubs, { name: club }));
    });
    // console.log(myClubs);
  }
  return (ready ? (
    <Container className="py-3" id="myInterest">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center py-3">
            <h2>My Interests</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {myClubs.map((club) => (<Col key={club._id}><Club club={club} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MyInterests;
