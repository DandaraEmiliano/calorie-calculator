import { Module } from '@nestjs/common';
import { CaloriesController } from './controllers/calories.controller';
import { CaloriesService } from './services/calories.service';

@Module({
  controllers: [CaloriesController],
  providers: [CaloriesService],
})
export class CaloriesModule {}
