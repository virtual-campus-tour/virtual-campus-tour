import { Selector } from 'testcafe';

class DormingPage {
  constructor() {
    this.pageId = '#dorming-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.click('#general-page-click');
    await testController.click('#dorming-page-click');
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const dorming = new DormingPage();
