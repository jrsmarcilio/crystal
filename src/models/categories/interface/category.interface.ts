import { Service } from 'src/models/services/interface/service.interface';

export interface Category {
  id: string;
  name: string;
  description: string;
  services: Service[];
}
