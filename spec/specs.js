describe('Contact', function() {
  it('should create a contact object', function() {
    var testContact = new Contact("Paul", "Hess");
    expect(testContact.firstName).to.equal("Paul");
    expect(testContact.lastName).to.equal("Hess");
    expect(testContact.address).to.eql([]);
  })
  it('should return a full name', function() {
    var testContact = new Contact("Paul", "Hess");
    expect(testContact.fullName()).to.equal("Paul Hess");
  })
})
