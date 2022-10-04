import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FilterDTO } from './filters.dto';

@Injectable()
export class FiltersPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      return plainToClass(FilterDTO, value);
    }
    return value;
  }
}
