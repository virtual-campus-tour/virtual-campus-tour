import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
// import { _ } from 'meteor/underscore';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Clubs } from '../../api/club/Clubs';
import LoadingSpinner from '../components/LoadingSpinner';
import { StudentDataValues } from '../../api/studentdata/StudentData';

const bridge = new SimpleSchema2Bridge(Clubs.schema);

/* Renders the EditClubs page for editing a single document. */
const EditClubs = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Clubs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Clubs.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, image, description } = data;
    // console.log(doc.name);
    // console.log(_.indexOf(StudentDataValues.clubs, doc.name));
    // console.log(StudentDataValues.clubs.indexOf(doc.name));
    StudentDataValues.clubs[StudentDataValues.clubs.indexOf(doc.name)] = name;
    // console.log(StudentDataValues.clubs);
    Clubs.collection.update(_id, { $set: { name, image, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
    // StudentData.collection.update({}, { $set: { 'clubs.$[element]': name } }, { arrayFilters: [{ element: doc.name }] }, { multi: true });
    // sDoc.forEach((student) => {
    //   const clubs = student.clubs;
    //   if (student.clubs.indexOf(doc.name) > -1) {
    //     clubs[student.clubs.indexOf(doc.name)] = name;
    //     StudentData.collection.update(student._id, { $set: { clubs } });
    //   }
    // });
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Clubs</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <TextField name="image" />
                <TextField name="description" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditClubs;
