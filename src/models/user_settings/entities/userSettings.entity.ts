import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserSettings } from '../interface/userSettings.interface';

@Entity('user_settings')
export class UserSettingsEntity implements UserSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  calendar_view: string;

  @Column({ length: 255 })
  google_calendar: string;

  @Column({ length: 255 })
  google_token: string;

  @Column({ default: false })
  google_sync: boolean;

  @Column({ length: 255 })
  notifications: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  salt: string;

  @Column()
  sync_future_days: number;

  @Column()
  sync_past_days: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  working_plan: string;

  @Column({ length: 255 })
  working_plan_exceptions: string;

  @Column()
  id_users: number;

  @Column({ length: 255 })
  id_google_calendar: string;
}
