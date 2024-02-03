import { CaloriesService } from '../../src/calories/services/calories.service';
import { CaloriesInput } from '../../src/calories/dtos/inputs/calories-input';

describe('CaloriesService', () => {
  let caloriesService: CaloriesService;

  beforeEach(() => {
    caloriesService = new CaloriesService();
  });

  describe('calculateCalories', () => {
    it('should calculate total calories correctly', () => {
      const inputData: CaloriesInput = {
        foods: [
          { name: 'Banana', calories: 105 },
          { name: 'Maçã', calories: 52 },
        ],
        quantity: 2,
      };

      const expectedOutput = 314;

      const result = caloriesService.calculateCalories(inputData);
      expect(result.totalCalories).toEqual(expectedOutput);
    });

    it('should handle invalid input gracefully', () => {
      const invalidInput: CaloriesInput = {
        foods: [{ name: 'Banana', calories: 105 }],
        quantity: -1,
      };

      expect(() =>
        caloriesService.calculateCalories(invalidInput),
      ).toThrowError();
    });
  });
});
