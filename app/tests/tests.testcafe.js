import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { general } from './general.page';
import { dorming } from './dorming.page';
import { food } from './food.page';
import { studyareas } from './studyareas.page';
import { athletics } from './athletics.page';
import { classroom } from './classroom.page';
import { campuscenter } from './campuscenter.page';
import { warriorrec } from './warriorrec.page';
import { department } from './department.page';
import { departmenttour } from './departmenttour.page';
import { postpage } from './POST.page';
import { admissionspage } from './admissions.page';
import { scholarshipspage } from './scholarships.page';
import { finishtour } from './finishtour.page';
import { footer } from './footer.component';
import { interest } from './interest.page';
import { EditUser } from './edituser.page';
import { addClub } from './addClub.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentialsAdmin = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-react-bootstrap-template localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that general page works', async (testController) => {
  await general.isDisplayed(testController);
});

test('Test that dorming page works', async (testController) => {
  await dorming.isDisplayed(testController);
});

test('Test that food page works', async (testController) => {
  await food.isDisplayed(testController);
});

test('Test that classroom page works', async (testController) => {
  await classroom.isDisplayed(testController);
});

test('Test that campus center page works', async (testController) => {
  await campuscenter.isDisplayed(testController);
});

test('Test that warrior rec page works', async (testController) => {
  await warriorrec.isDisplayed(testController);
});

test('Test that study areas page works', async (testController) => {
  await studyareas.isDisplayed(testController);
});

test('Test that athletics page works', async (testController) => {
  await athletics.isDisplayed(testController);
});

test('Test that tour department page works', async (testController) => {
  await departmenttour.isDisplayed(testController);
});

test('Test that post page works', async (testController) => {
  await postpage.isDisplayed(testController);
});

test('Test that admissions page works', async (testController) => {
  await admissionspage.isDisplayed(testController);
});

test('Test that scholarships page works', async (testController) => {
  await scholarshipspage.isDisplayed(testController);
});

test('Test that end tour page works', async (testController) => {
  await finishtour.isDisplayed(testController);
});

test('Test that footer page works', async (testController) => {
  await footer.goToAllPagesFooter(testController);
});

test('Test that nav bar pages work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that navbar tabs work', async (testController) => {
  await navBar.goToAllPages(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that department page works', async (testController) => {
  await navBar.gotoDepartmentPage(testController);
  await department.isDisplayed(testController);
});

test('Test that interest page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoInterestPage(testController);
  await interest.isDisplayed(testController);
});

test('Test that Edit User page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoEditUserPage(testController);
  await EditUser.isDisplayed(testController);
  await EditUser.selectClub(testController);
});

test('Test that Add Club User page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await addClub.goToAddPage(testController);
});
