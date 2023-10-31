import generateRandomNum from './RandomNum.js';

// 자동차 위치 초기화 객체
const initializeCarsPosition = (carNames) => {
  return carNames.reduce((carsPosition, name) => {
    carsPosition[name] = 0;
    return carsPosition;
  }, {});
};

// 무작위 수 조건에 따라 전진
const moveCar = (carNames, carsPosition, randomNum) => {
  carNames.map((name) => {
    if (randomNum >= 4) carsPosition[name] += 1;
  });
};
