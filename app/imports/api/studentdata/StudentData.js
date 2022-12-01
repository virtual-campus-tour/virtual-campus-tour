import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const StudentData = new Mongo.Collection('StudentData');

const StudentDataValues = {
  clubs: ['ACM', 'Game Dev', 'SWITCH', 'BDCUH'],
  // majors: ['Physics', 'Math', 'Chemistry', 'Computer Science'],
};

/** Define a schema to specify the structure of each document in the collection. */
const StudentDataSchema = new SimpleSchema({
  name: String,
  email: String,
  clubs: { type: Array, defaultValue: [] },
  'clubs.$': { type: String, allowedValues: StudentDataValues.clubs },
  // major: String,
}, { tracker: Tracker });

/** Attach the schema to the collection. */
StudentData.attachSchema(StudentDataSchema);

/** Make these objects available to others. */
export { StudentDataValues, StudentData, StudentDataSchema };
