import { Service } from 'src/models/services/interface/service.interface';

export interface Category {
  id: number;
  name: string;
  description: string;
  services: Service[];
}
