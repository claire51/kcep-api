import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // console.log("HTTP exception handler triggered",
    // JSON.stringify(exception));

    const ctx = host.switchToHttp();

    const response = ctx.getResponse(),
      request = ctx.getRequest(),
      statusCode = exception.getStatus();

    let errorMessage = exception.message.message;

    if (process.env.NODE_ENV === 'production') {
      errorMessage =
        'A server error occurred. Please contact the administrator';
    }

    const err = {
      status: statusCode,
      createdBy: 'HttpExceptionFilter',
      error: errorMessage,
    };

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(err),
      `Exception filter`,
    );

    return response.status(statusCode).json(err);
  }
}
