import { toNamePaths, matchPaths } from '../src/utils/pathUtil';

describe('toNamePaths', () => {
  test('toNamePaths []', () => {
    // @ts-ignore
    expect(toNamePaths([])).toBeUndefined();
  });

  test('toNamePaths "name"', () => {
    expect(toNamePaths('name')).toEqual(['name']);
  });

  test('toNamePaths ["name1", "name2"]', () => {
    expect(toNamePaths(['name1', 'name2'])).toEqual(['name1', 'name2']);
  });
});


describe('matchPaths', () => {

  test('matchPaths()', () => {
    expect(matchPaths()).toBeFalsy();
  });

  test('matchPaths([1], [1, 2])', () => {
    expect(matchPaths([1], [1, 2])).toBeTruthy();
  });

  test('matchPaths([1], [1, 2], true)', () => {
    expect(matchPaths([1], [1, 2], true)).toBeFalsy();
  });

  test('matchPaths([1, 2], [1, 2], true)', () => {
    expect(matchPaths([1, 2], [1, 2], true)).toBeTruthy();
  });

});
