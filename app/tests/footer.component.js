class FooterComponent {

  async goToAllPagesFooter(testController) {
    await testController.click('#interest-uhm-nav');
    await testController.click('#food-uhm-nav');
    await testController.click('#classrooms-uhm-nav');
    await testController.click('#dorming-uhm-nav');
    await testController.click('#study-uhm-nav');
  }
}

export const footer = new FooterComponent();
