import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Clubs';
import { StudentData } from '../../api/studentdata/StudentData';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addClubs = (club) => {
  console.log(`  Adding: ${club.name}`);
  Clubs.collection.insert(club);
};

// Initialize the StuffsCollection if empty.
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default clubs.');
    Meteor.settings.defaultClubs.forEach(club => addClubs(club));
  }
}

const addStudentData = (data) => {
  console.log(`  Adding: ${data.email}`);
  StudentData.insert({ name: data.email, email: data.email });
};

if (StudentData.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating default student data.');
    Meteor.settings.defaultAccounts.forEach(data => addStudentData(data));
  }
}
