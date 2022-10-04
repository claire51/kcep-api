import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class FiltersPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
