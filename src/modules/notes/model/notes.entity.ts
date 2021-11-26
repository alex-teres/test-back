import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column text: string;

  @Column({ defaultValue: false }) completed: boolean;
}
