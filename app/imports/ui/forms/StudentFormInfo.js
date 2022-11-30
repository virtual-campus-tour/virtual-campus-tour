import SimpleSchema from 'simpl-schema';
import { StudentDataValues as DataValues } from '../../api/studentdata/StudentData';

const StudentFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  email: { label: 'Email', type: String },
  clubs: { label: 'Clubs', type: Array, optional: true },
  'clubs.$': { type: String, allowedValues: DataValues.clubs },
  // major: { label: 'Major', type: String, allowedValues: DataValues.majors },
});

export { StudentFormSchema };
