export interface Appointment {
  id: number;
  book_datetime: Date;
  start_datetime: Date;
  end_datetime: Date;
  location: string;
  notes: string;
  hash: string;
  is_unavailable: boolean;
  id_users_provider: number;
  id_users_customer: number;
  id_services: number;
  id_google_calendar: string;
}
