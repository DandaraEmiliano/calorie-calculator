import { Injectable } from '@nestjs/common';
import { CaloriesInput } from '../dtos/inputs/calories-input';
import { CaloriesOutput } from '../dtos/outputs/calories.output';

@Injectable()
export class CaloriesService {
  calculateCalories(data: CaloriesInput): CaloriesOutput {
    const totalCalories = data.foods.reduce(
      (sum, food) => sum + food.calories * data.quantity,
      0,
    );
    return new CaloriesOutput(totalCalories);
  }
}
