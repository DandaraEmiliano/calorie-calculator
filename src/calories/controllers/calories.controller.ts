import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CaloriesService } from '../services/calories.service';
import { CaloriesInput } from '../dtos/inputs/calories-input';
import { CaloriesOutput } from '../dtos/outputs/calories.output';

@Controller('calories')
export class CaloriesController {
  constructor(private readonly caloriesService: CaloriesService) {}

  @Post('calculate')
  calculateCalories(
    @Body(new ValidationPipe()) calculateCaloriesDto: CaloriesInput,
  ): CaloriesOutput {
    return this.caloriesService.calculateCalories(calculateCaloriesDto);
  }
}
