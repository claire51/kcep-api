import {
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn({ name: 'DATE_CREATED' })
  CreatedAt: Date;

  @UpdateDateColumn({ name: 'DATE_UPDATED' })
  UpdatedAt: Date;
}
