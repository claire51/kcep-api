import {
  Entity,
  Column, PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';
@Entity('OTP', {
  orderBy: {
    ID: 'DESC',
  },
})
export class Otp {
  @PrimaryGeneratedColumn({ name: 'ID' })
  ID: number;
  @Column({ name: 'TERMINAL_ID' })
  TerminalID: string;
  @Column({ name: 'OTP_GENERATION_TIME' })
  AutoGenerationTime: Date;
  @Column({ name: 'OTP_UTILIZED' })
  OtpUtilized: number;
  @Column({ name: 'OTP_UTILIZED_TIME' })
  OtpUtilizedTime: Date;
  @Column({ name: 'OTP_EXPIRED' })
  OtpExpired: number;
  @Column({ name: 'OTP_EXPIRED_TIME' })
  OtpExpiredTime: Date;
  @Column({ name: 'OTP' })
  Otp: string;
}
