import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { BaseEntity } from '../../shared/base.entity';
import {expiry} from "../../config/report";
import {configCredentials} from "../../config/services_constants";

@Entity('AGRODEALER_LOGIN_DETAILS', {
  orderBy: {
    CreatedAt: 'DESC',
  },
})
export class User extends BaseEntity {
  @PrimaryColumn({ name: 'TERMINAL_ID' })
  UserID: string;
  @Column({ name: 'TERMINAL_ID' })
  username: string;
  @Column({ name: 'UPDATED_BY' })
  UpdatedBy: number;
  @Column({ name: 'MERCHANT_ID' })
  MerchantID: string;
  @Column({ name: 'PHONE_NUMBER' })
  PhoneNumber: string;
  @Column({ name: 'EMAIL_ADDRESS' })
  EmailAddress: string;
  @Column({ name: 'PASSWORD_HASH' })
  Password: string;
  @Column({ name: 'APPROVED_BY' })
  ApprovedBy: number;
  @Column({ name: 'REMARKS' })
  Remarks: number;
  @Column({ name: 'FIRSTLOGINPASSWORD' })
  FirstPassword: number;

  get sign(): User {
    const { UserID, Password } = this;
    const token = jwt.sign(
      {
        UserID,
        Password,
      },
        process.env.JWT_SECRET,
      { expiresIn: expiry.duration },
    );

    // let user = plainToClass(UserRO, this);
    return {
      ...this,
      token,
    };
  }
}
