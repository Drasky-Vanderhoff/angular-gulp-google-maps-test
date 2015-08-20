'use strict';

describe('The main view', function () {
  var new_address = "";
  var address_1 = "Carlos Paz";
  var address_2 = "Santiago de Chile";
  beforeEach(function () {
    browser.get('/index.html');
  });
  
  it('should be able to create a new address marker', function() {
      element(by.css('button')).click(); // Click on the add new address
      element(by.css('[id="direction"]')).sendKeys(address_1); // Writes address_1
      element(by.css('[ng-click="addNewMarker(direction)"]')).click(); // Insert address_1
      element(by.css('[id="direction"]')).clear(); // Cleans the text box
      element(by.css('[id="direction"]')).sendKeys(address_2); // Writes address_2
      element(by.css('[ng-click="addNewMarker(direction)"]')).click(); // Insert address_2
      element(by.css('[id="direction"]')).clear(); // Cleans the text box
      // element(by.css('.ngdialog-content .ngdialog-close')).click(); // For some odd reason this doesn't work...
      
      browser.waitForAngular().then(function(){
          new_address = element.all(by.css('markers ul li')).first().getText();
          expect(new_address).toEqual(address_1);
          new_address = element.all(by.css('map marker')).first().getAttribute('title');
          expect(new_address).toEqual(address_1);
          new_address = element.all(by.css('markers ul li')).last().getText();
          expect(new_address).toEqual(address_2);
          new_address = element.all(by.css('map marker')).last().getAttribute('title');
          expect(new_address).toEqual(address_2);
      });

  });
});
