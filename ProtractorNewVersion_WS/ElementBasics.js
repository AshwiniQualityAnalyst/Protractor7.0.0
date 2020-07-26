describe('Protractor Element Demo', function() {

	it('Locators writing for Prasad', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3")
		element(by.id("gobutton")).click();

		// Jasmine
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");

		element(by.css("h2[class='ng-binding']")).getText().then(
				function(text) {
					console.log("Get Text Result: " + text);
				});

	});

});