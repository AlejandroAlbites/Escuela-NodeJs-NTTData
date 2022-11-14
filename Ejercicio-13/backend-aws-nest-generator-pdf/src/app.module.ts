import { Module } from '@nestjs/common';
import { LambdaService } from './lambda/lambda.service';
import { NotLambdaService } from './not-lambda/not-lambda.service';

@Module({
  imports: [],
  controllers: [],
  // providers: [LambdaService],
  providers: [NotLambdaService],
})
export class AppModule {}
