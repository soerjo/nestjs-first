import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IBooks {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
}

@Entity()
export class Books extends BaseEntity implements IBooks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  author: string;

  @Column()
  year: number;
}
