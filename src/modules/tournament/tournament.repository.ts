// tournament.repository.ts
import { Repository } from 'typeorm';
import { Tournament } from './tournament.entity';


export class TournamentRepository extends Repository<Tournament> {
  // Métodos personalizados del repositorio, si es necesario
}
