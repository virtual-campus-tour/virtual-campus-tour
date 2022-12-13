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
  }
}

export const addClub = new AddClubPage();
