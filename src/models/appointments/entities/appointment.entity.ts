import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from '../interface/appointment.interface';

@Entity('appointments')
export class AppointmentEntity implements Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  book_datetime: Date;

  @Column()
  start_datetime: Date;

  @Column()
  end_datetime: Date;

  @Column({ length: 255 })
  location: string;

  @Column({ length: 255 })
  notes: string;

  @Column({ length: 255 })
  hash: string;

  @Column({ default: false })
  is_unavailable: boolean;

  @Column()
  id_users_provider: number;

  @Column()
  id_users_customer: number;

  @Column()
  id_services: number;

  @Column({ length: 255 })
  id_google_calendar: string;
}
