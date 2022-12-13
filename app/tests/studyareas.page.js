import { Selector } from 'testcafe';

class StudyAreasPage {
  constructor() {
    this.pageId = '#study-areas-page';
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
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const studyareas = new StudyAreasPage();
