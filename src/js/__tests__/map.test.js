import ErrorRepository from '../map';

test.each([
  [1, 'ошибка 1'],
  [2, 'ошибка 2'],
  [3, 'ошибка 3'],
  [4, 'ошибка 4'],
  [5, 'ошибка 5'],
  [99999, 'Uknown error'],
])(
  ('Error Repository should return text of error and uknown error'),
  (input, expected) => {
    const result = new ErrorRepository();
    expect(result.translate(input)).toEqual(expected);
  },
);