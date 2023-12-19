export interface UserSettings {
  id_users: number;
  username: string;
  password: string;
  salt: string;
  working_plan: string;
  working_plan_exceptions: string;
  notifications: string;
  google_sync: boolean;
  google_token: string;
  google_calendar: string;
  sync_past_days: number;
  sync_future_days: number;
  calendar_view: string;
}
