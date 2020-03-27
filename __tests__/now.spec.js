const now = require('../src/now');

describe('splitsecond', () => {
  it('now', () => {
    const currentTimestamp = now();

    expect(typeof currentTimestamp).toEqual('string');
    expect(currentTimestamp).toHaveLength(24);
    expect(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(currentTimestamp)).toEqual(true);
  });
});
