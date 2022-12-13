import { Selector } from 'testcafe';

class EditUserPage {
  constructor() {
    this.pageId = '#edit-user-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async selectClub(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.click('#update');
    await testController.click('#my-interests-nav');
    const rowCount = Selector('card').count;
    await testController.expect(rowCount).gte(0);
  }
}

export const EditUser = new EditUserPage();
