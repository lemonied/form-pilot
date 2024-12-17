import { basePick, get, set } from '../src/utils/valueUtil';

describe('valueUtil', () => {

  const obj = {
    a: 1,
    b: {
      c: [
        {
          d: 3,
          f: 5,
        },
      ],
      e: 4,
      g: undefined,
      h: null,
    },
  };

  test('basePick()', () => {

    let value = basePick(obj, ['b', 'c', 0, 'd']);
    expect(value).toEqual({ b: { c: [{ d: 3 }] } });
    expect(value.b.c[0].d).toBe(3);

    value = basePick(obj, ['a'], value);
    expect(value).toEqual({ a: 1, b: { c: [{ d: 3 }] } });
    value = basePick(obj, ['b', 'c', 0, 'f'], value);
    expect(value).toEqual({ a: 1, b: { c: [{ d: 3, f: 5 }] } });

  });

  test('get()', () => {
    expect(get(obj, ['b', 'c', 0, 'd'])).toEqual([3, true]);
    expect(get(obj, ['b', 'g'])).toEqual([undefined, true]);
    expect(get(obj, ['b', 'h'])).toEqual([null, true]);
    expect(get(obj, ['b', 'h', 'i'])).toEqual([undefined, false]);
  });

  test('set()', () => {
    expect(
      set(undefined, [1, 'a', 'b', 0], 'hello'),
    ).toEqual([
      undefined,
      {
        a: {
          b: ['hello'],
        },
      },
    ]);
  });

});
