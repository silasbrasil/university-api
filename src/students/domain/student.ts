
export interface Student {
  id: string;
  name: string;
  email: string;
  active: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
