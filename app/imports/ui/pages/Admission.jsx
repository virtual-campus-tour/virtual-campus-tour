import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Admission = () => (
  <>
    <h1 className="text-center">Freshman Admission Information</h1>
    <Container>
      <h2 className="text-center">High School Requirements</h2>
      <Row>
        <Col>
          <h4 className="text-center">English</h4>
          <h5 className="text-center">4 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Math</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Science</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Social Science</h4>
          <h5 className="text-center">3 Units</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center">Other College Prep</h4>
          <h5 className="text-center">4 Units</h5>
        </Col>
        <Col>
          <h4 className="text-center">Elective</h4>
          <h5 className="text-center">5 Units</h5>
        </Col>
      </Row>

    </Container>
    <Container>
      <h2 className="text-center">Application Deadline</h2>
      <Row>
        <Col>
          <Container>
            <h3 className="text-center">Fall Semester</h3>
            <Row>
              <Col>
                <h7>January 5th</h7>
                <br />
                <h7>March 1st</h7>
              </Col>
              <Col>
                <h7>Priority Deadline</h7>
                <br />
                <h7>Final Deadline</h7>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <Container>
            <h3 className="text-center">Spring Semester</h3>
            <Row>
              <Col>
                <h7>September 1st</h7>
                <br />
                <h7>October 1st</h7>
                <br />
                <h7>November 1st</h7>
              </Col>
              <Col>
                <h7>Priority Deadline</h7>
                <br />
                <h7>Final Deadline</h7>
                <br />
                <h7>Late Application</h7>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container>
      <h2 className="text-center">Cost</h2>
      <Container className="align-items-center">

        <table className="table-size">
          <tr className="text-center">
            <th className="text-left">Expense</th>
            <th>Resident</th>
            <th>WUE</th>
            <th>Non-Resident</th>
          </tr>
          <tr className="text-center">
            <td className="text-left">Tuition</td>
            <td>$11,304</td>
            <td>$16,956</td>
            <td>$33,335</td>
          </tr>
          <tr className="text-center">
            <td className="text-left">University Free</td>
            <td>$882</td>
            <td>$882</td>
            <td>$882</td>
          </tr>
          <tr className="text-center">
            <td className="text-left">Books and Supplies</td>
            <td>$1,350</td>
            <td>$1,350</td>
            <td>$1,350</td>
          </tr>
        </table>
      </Container>
    </Container>
  </>
);

export default Admission;
