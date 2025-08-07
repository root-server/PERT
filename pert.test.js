const test = require('node:test');
const assert = require('node:assert');
const { mu, sigma } = require('./pert');

test('mu and sigma for values 1,2,3', () => {
  assert.strictEqual(mu(1, 2, 3), 2);
  assert.strictEqual(sigma(1, 2, 3), 1 / 3);
});

test('mu and sigma for values 2,5,14', () => {
  assert.strictEqual(mu(2, 5, 14), 6);
  assert.strictEqual(sigma(2, 5, 14), 2);
});

test('mu and sigma for fractional values 1.5,2.5,4.5', () => {
  assert.strictEqual(mu(1.5, 2.5, 4.5), 8 / 3);
  assert.strictEqual(sigma(1.5, 2.5, 4.5), 0.5);
});
