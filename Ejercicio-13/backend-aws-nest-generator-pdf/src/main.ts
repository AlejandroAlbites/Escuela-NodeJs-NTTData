import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler, APIGatewayEvent } from 'aws-lambda';
import { AppModule } from './app.module';
import { PDF } from './interface/pdf.interface';
/**
 * Dos servicio uno para localhost, prod
 */
// import { LambdaService } from './lambda/lambda.service';
import { NotLambdaService } from './not-lambda/not-lambda.service';

/**
 * AWS  Lambda provee los argumentos
 * @param event: APIGatewayEvent
 * @param context
 * @param callback
 * @returns
 */
export const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  // const appService = appContext.get(LambdaService); //TODO esto esta para PROD
  const appService = appContext.get(NotLambdaService); //TODO esto esta para localhost

  const data = event.body;
  const newData: PDF = JSON.parse(data);

  console.log(data);
  return {
    body: await appService.buildPdf(newData), //TODO es buffer base64
    headers: {
      'Content-type': 'application/pdf',
    },
    isBase64Encoded: true,
    statusCode: HttpStatus.OK,
  };
};
