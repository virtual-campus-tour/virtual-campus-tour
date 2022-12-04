import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Scholarship = () => (

  <div>

    <h1 className="text-center small-spacer">UH Manoa Scholarships</h1>
    <Container className="small-spacer">
      <h2>New Warrior Scholarship</h2>
      <p>
        The New Warrior Scholarship is meant for incoming UH Manoa freshmen.
        <br />
        The New Warrior Scholarship consists of the following scholarships:
      </p>
      <ul>
        <li>Regent&apos;s</li>
        <li>Provost Achivement (formerly Chancellor&apos;s)</li>
        <li>Manoa Excellence</li>
        <li>Manoa International Excellence</li>
      </ul>
      <h4>Deadline for the New Warrior Scholarship</h4>
      <h5> - January 24th, 2023</h5>
    </Container>
    <Container className="small-spacer">
      <h2>Presidential and Transfer Merit Scholarships</h2>
      <p>The Presidential and Transfer Merit Scholarships are primarily meant for transfer students and upperclassmen</p>
      <h4>Timeline</h4>
      <ul>
        <li>Opens: October 1st</li>
        <li>Closes: March 1st</li>
        <li>Letter of Recomendation: March 8th</li>
        <li>Award Notices: May (estimated)</li>
      </ul>

    </Container>
    <Container className="small-spacer">
      <h2>Enrollment Merit Scholarship</h2>
      <p>The Enrollment Merit Scholarships are automatically determined when an Admissions application is submitted. A separate scholarship application is not required.</p>
      <ul>
        <li>Manoa Academic Merit Scholarship (first time students)</li>
        <li>International Academic Merit</li>
      </ul>
    </Container>
    <Container className="small-spacer">
      <h2>Financial Aid Scholarships</h2>
      <p>
        Several Scholarships are offered directly through the financial aid office.
        You are encouraged to complete your FAFSA application by Feburary 1st.
        Some scholarships require a separate application and scholarships are given based on need.
      </p>
      <ul>
        <li>State of Hawaii B Plus Scholarship</li>
        <li>Second Century Scholarship</li>
        <li>Other Financial Aid Services Scholarships</li>
      </ul>
    </Container>
    <Container className="small-spacer">
      <h2>Kua&apos;ana Tuition Waiver</h2>
      <p>
        The Kua&apos;ana Native Hawaiian Student Development Services provides need-based tuition waivers for undergraduate, and classified graduate Native Hawaiian students.
      </p>
    </Container>
    <Container className="small-spacer">
      <h2>STAR Scholarships</h2>
      <p>
        STAR (the UH system registration and advising system) has an internal system for finding various UH Manoa Scholarships and helps facillitate the application process online.
        The Scholarship recipients are chosen by the Manoa academic departments.
      </p>
    </Container>

    <Container className="small-spacer">
      <h2>International Scholarships</h2>
      <p>
        The International Student Services Office administers several scholarships for international students.
      </p>
    </Container>

    <Container className="small-spacer">
      <Button href="https://manoa.hawaii.edu/fas/types-of-aid/scholarships/" variant="green" className="btn btn-lg fs-2">
        Learn More about UH Manoa Scholarships
      </Button>
    </Container>

  </div>

);

export default Scholarship;
