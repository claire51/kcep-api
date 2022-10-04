import { Expose } from 'class-transformer';

export class FilterDTO {
  @Expose({ name: 'pageIndex' }) page: number;
  @Expose({ name: 'pageSize' }) limit: number;
}
