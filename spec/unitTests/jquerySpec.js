describe("jQuery Tests", function(){

	it("loads a view fixture and tests against it", function(){
		loadFixtures('myfixture.html');
		// $('#my-fixture').
		expect($('#foobar')).toBeDefined();
		expect($('#foobar')).toContainText('baz');
	});

});