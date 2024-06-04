import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  matchId: number;
}
