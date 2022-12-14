import { Selector } from 'testcafe';

class ScholarshipsPage {
  constructor() {
    this.pageId = '#scholarships-page';
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
    await testController.click('#department-page-click');
    await testController.click('#post-page-click');
    await testController.click('#admissions-page-click');
    await testController.click('#scholarships-page-click');
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const scholarshipspage = new ScholarshipsPage();
