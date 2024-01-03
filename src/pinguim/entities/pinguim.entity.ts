import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Pinguim {
  @ObjectIdColumn()
  _id: ObjectId

  @Column({ type: 'varchar', length: 30 })
  nome: string;

  @Column({ type: 'int' })
  idade: number;
}
