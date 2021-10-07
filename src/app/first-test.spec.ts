describe('first test', () => {
  let systemUnderTest;

  beforeEach(() => {
    // set system under test to an empty object so that it is reset before every test
    systemUnderTest = {};
  });

  it('should be true if true', () => {
    // arrange
    systemUnderTest.property = false;

    // act
    systemUnderTest.property = true;

    // assert
    expect(systemUnderTest.property).toBe(true);
  });
});
