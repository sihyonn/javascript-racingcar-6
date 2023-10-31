import { Console } from '@woowacourse/mission-utils';

//자동차 이름 입력받기
const getCarNames = async () => {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const carNames = userInput.split(',');

  return carNames;
};
