// result.repository.ts
import {  Repository } from 'typeorm';
import { Result } from './result.entity';


export class ResultRepository extends Repository<Result> {
  // Métodos personalizados del repositorio, si es necesario
}
