import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { general } from './general.page';
import { dorming } from './dorming.page';
import { department } from './department.page';
import { interest } from './interest.page';
import { EditUser } from './edituser.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

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
});
