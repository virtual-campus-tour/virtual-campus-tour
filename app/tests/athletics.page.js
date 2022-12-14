import { Selector } from 'testcafe';

class AthleticsPage {
  constructor() {
    this.pageId = '#athletics-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.click('#general-page-click');
    await testController.click('#dorming-page-click');
    await testController.click('#dining-page-click');
    await testController.click('#classroom-page-click');
    await testController.click('#CampusCenterTour-page-click');
    await testController.click('#WRCTour-page-click');
    await testController.click('#study-areas-click');
    await testController.click('#athletics-page-click');
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const athletics = new AthleticsPage();
