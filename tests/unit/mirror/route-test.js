import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mirror', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mirror');
    assert.ok(route);
  });
});
