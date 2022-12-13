import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AdmissionComp = () => (
  <>
    <h1 className="text-center small-spacer" id="admissions-page">Freshman Admission Information</h1>
    <Container className="small-spacer">
      <h2 className="text-center small-spacer-bottom">High School Requirements</h2>
      <Row>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/English.png" alt="Eng Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">English</h4>
          <h5 className="text-center font-larger">4 Units</h5>
        </Col>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/Math.png" alt="Math Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">Math</h4>
          <h5 className="text-center font-larger">3 Units</h5>
        </Col>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/Science.png" alt="Science Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">Science</h4>
          <h5 className="text-center font-larger">3 Units</h5>
        </Col>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/SocialSciences.png" alt="Social Science Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">Social Science</h4>
          <h5 className="text-center font-larger">3 Units</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/OtherCollegePrep.png" alt="Other College Prep Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">Other College Prep</h4>
          <h5 className="text-center font-larger">4 Units</h5>
        </Col>
        <Col>
          <Container className="admiss-icon text-center">
            <img src="/images/Electives.png" alt="Elective Pic" width="100" height="100" />
          </Container>
          <h4 className="text-center admiss-icon">Elective</h4>
          <h5 className="text-center font-larger">5 Units</h5>
        </Col>
      </Row>

    </Container>
    <Container className="small-spacer font-larger">
      <h2 className="text-center">Application Deadline</h2>
      <Row>
        <Col>
          <Container>
            <img className="admiss-icon centered" src="/images/FallSemester.png" alt="Leaf Pic" width="100" height="100" />
            <h3 className="text-center admiss-icon">Fall Semester</h3>
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
            <img className="admiss-icon centered" src="/images/SpringSemester.png" alt="Flower Pic" width="100" height="100" />
            <h3 className="text-center admiss-icon">Spring Semester</h3>
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
    <Container className="small-spacer small-spacer-bottom">
      <h2 className="text-center small-spacer-bottom">Cost</h2>
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

export default AdmissionComp;
