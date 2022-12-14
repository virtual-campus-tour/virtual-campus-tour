import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SelectField, SubmitField,
} from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { StudentFormSchema as formSchema } from '../forms/StudentFormInfo';
import { StudentData } from '../../api/studentdata/StudentData';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the Page for editing a document. */
const EditUser = () => {
  // Get the email from the URL field. See imports/ui/layouts/App.jsx for the route containing :email.
  const { email } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker

  const { ready, studentDoc } = useTracker(() => {
    // Request StudentData and Enrollment docs. Won't be locally available until ready() returns true.
    const studentDataSubscription = Meteor.subscribe('StudentData');
    return {
      studentDoc: StudentData.findOne({ email }),
      ready: studentDataSubscription.ready(),
    };
  }, []);

  /* On submit, try to insert the data. If successful, reset the form. */
  const submit = (data) => {
    let updateError;
    const studentId = studentDoc._id;
    const { name, clubs } = data;
    StudentData.update(studentId, { $set: { name, clubs } }, (error) => {
      updateError = error;
    });
    if (updateError) {
      swal('Error', updateError.message, 'error');
    } else {
      swal('Success', 'The student record was updated.', 'success');
    }
  };
  const transform = (label) => ` ${label}`;

  /* If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  return (ready) ? (
    <Container id="edit-user-page">
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Edit User</h2>
          <AutoForm schema={bridge} onSubmit={(data) => submit(data)} model={studentDoc}>
            <Card className="p-2">
              <Container>
                <Row>
                  <Col><TextField name="name" showInlineError placeholder="Your name" /></Col>
                  <Col><TextField name="email" showInlineError defaultValue={studentDoc.email} placeholder="Your email" disabled /></Col>
                </Row>
                <SelectField
                  name="clubs"
                  showInlineError
                  help="Select clubs (optional)"
                  multiple
                  checkboxes
                  inline
                  transform={transform}
                />
                <SubmitField value="Update" id="update" />
              </Container>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditUser;
