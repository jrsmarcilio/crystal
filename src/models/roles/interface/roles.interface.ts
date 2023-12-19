export interface Role {
  id: number;
  name: string;
  slug: string;
  is_admin: boolean;
  appointments: boolean;
  customers: boolean;
  services: boolean;
  users: boolean;
  system_settings: boolean;
  user_settings: boolean;
}
