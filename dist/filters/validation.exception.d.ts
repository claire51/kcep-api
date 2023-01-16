import { UnprocessableEntityException } from '@nestjs/common';
export declare class ValidationException extends UnprocessableEntityException {
    validationErrors: string[];
    constructor(validationErrors: string[]);
}
