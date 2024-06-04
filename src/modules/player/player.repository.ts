// player.repository.ts
import {  Repository } from 'typeorm';
import { Player } from './player.entity';

export class PlayerRepository extends Repository<Player> {
  // Métodos personalizados del repositorio, si es necesario
}
