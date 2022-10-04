import { Expose } from "class-transformer";

export abstract class BaseRO {
  @Expose({ name: 'DATECREATED' }) CreatedAt: Date;
  @Expose({ name: 'DATEUPDATED' }) UpdatedAt: Date;
}

export abstract class PgRO {
  @Expose() itemCount: number;
  @Expose() totalItems: number;
  @Expose() pageCount: number;
}
