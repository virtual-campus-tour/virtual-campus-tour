import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Clubs';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addClubs = (club) => {
  console.log(`  Adding: ${club.name} (${club.owner})`);
  Clubs.collection.insert(club);
};

// Initialize the StuffsCollection if empty.
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default clubs.');
    Meteor.settings.defaultClubs.forEach(club => addClubs(club));
  }
}
