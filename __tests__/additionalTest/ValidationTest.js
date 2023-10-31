import {
  validateCarNames,
  validateTryCount,
} from '../../src/utils/Validation.js';
import { VALIDATION } from '../../src/constants/MESSAGE.js';

describe('자동차이름 확인', () => {
  test('자동차이름 5자 초과 시 에러', () => {
    const 잘못된이름 = ['차1', '차2', '차33333'];
    expect(() => validateCarNames(잘못된이름)).toThrowError(
      VALIDATION.NAME_LENGTH
    );
  });

  test('자동차 이름이 2개 미만일 시 에러', () => {
    const 잘못된이름 = ['자동차1']; // 개수 검증에 어긋나는 이름 추가
    expect(() => validateCarNames(잘못된이름)).toThrowError(
      VALIDATION.CAR_COUNT
    );
  });
});

describe('시도횟수 확인', () => {
  test('시도 횟수가 숫자가 아닐 시 에러', () => {
    const 잘못된횟수 = 'abc'; // 유효성 검사에 어긋나는 횟수
    expect(() => validateTryCount(잘못된횟수)).toThrowError(
      VALIDATION.TRY_COUNT
    );
  });
});
