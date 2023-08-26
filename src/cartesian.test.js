import { it, expect } from 'vitest';
import { cartesianPointsDistance } from './cartesian.js';

it('Should calculate the distance between to cartesian points', () => {
  //Arrange
  const cartesianPoint1 = [1, 2];
  const cartesianPoint2 = [2, 3];
  const temp = [(2 - 1) ** 2, (3 - 2) ** 2];
  const expectedResult = Math.sqrt(temp[0] + temp[1]);
  //Act
  const result = cartesianPointsDistance(cartesianPoint1, cartesianPoint2);

  //Assert
  expect(result).toBe(expectedResult);
});

it('Should calculate the distance between to cartesian points in string format', () => {
  //Arrange
  const cartesianPoint1 = ['1', '2'];
  const cartesianPoint2 = ['2', '3'];
  const temp = [(2 - 1) ** 2, (3 - 2) ** 2];
  const expectedResult = Math.sqrt(temp[0] + temp[1]);

  //Act
  const result = cartesianPointsDistance(cartesianPoint1, cartesianPoint2);

  //Assert
  expect(result).toBe(expectedResult);
});
