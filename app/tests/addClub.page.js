import { Selector } from 'testcafe';

class AddClubPage {
  constructor() {
    this.pageId = '#edit-user-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async goToAddPage(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#administrative');
    await testController.click('#add-club');
    await testController.typeText('#name', 'icspark');
    // eslint-disable-next-line max-len
    await testController.typeText('#image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ficsparkhawaii%2F&psig=AOvVaw123eCrU3RjCzmCQZjU2tP-&ust=1671002836789000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMiP5uWI9vsCFQAAAAAdAAAAABAE');
    await testController.typeText('#description', 'webdevelopment');
    await testController.click('#submit');
    await testController.click('#administrative');
    await testController.click('#list-club');
    const rowCount = Selector('td').count; // select <td>
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.expect(rowCount).gte(7);
  }
}

export const addClub = new AddClubPage();
