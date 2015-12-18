import { test } from 'qunit';
import moduleForAcceptance from 'noovis-app2-ember2/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sites');

test('visiting /sites', function(assert) {
  var company = server.create('company', {name: "ACME"});
	server.create('network-site', {
		name: "ACME Lab",
		company: company.id
	});
	
	server.createList('network-site', 3);
  visit('/sites');

  andThen(function() {
    assert.equal(currentURL(), '/sites');
    
    assert.equal(
    	find('[data-role=network-site-link]').length, 
    	4,
    	"All network-site links are rendered");
    
    assert.equal(
    	find('[data-role=network-site-link]:first').text(),
    	"ACME Lab", 
    	"network-site links contains the network-site name");
  });
});


// test('Sites page has links to network-sites', function(assert) {
// 	site = server.create('network-site', {name: "ACME Lab"});
//   visit('/sites');
//   click('[data-role=network-site-link]:first');

//   andThen(function() {
//     assert.equal(currentURL(), '/network-sites/'+site.id);
//   });
// });