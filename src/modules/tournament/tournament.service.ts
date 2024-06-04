// tournament.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { TournamentRepository } from './tournament.repository';
import { CreateTournamentDto } from './dto/create.tournament.dto';
import { UpdateTournamentDto } from './dto/update.tournament.dto';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: TournamentRepository,
  ) {}

  async getTournamentById(id): Promise<Tournament> {
    const tournament = await this.tournamentRepository.findOne(id);
    if (!tournament) throw new NotFoundException(`Tournament with ID ${id} not found`);
    return tournament;
  }
  
  async getAllTournaments(): Promise<Tournament[]> {
    return await this.tournamentRepository.find();
  }
  


  async createTournament(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const newTournament = this.tournamentRepository.create(createTournamentDto);
    return await this.tournamentRepository.save(newTournament);
  }
  

  async updateTournament(id: number, updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
    const tournament = await this.getTournamentById(id);
    return await this.tournamentRepository.save({ ...tournament, ...updateTournamentDto });
  }
  

  async deleteTournament(id: number): Promise<boolean> {
    const tournament = await this.getTournamentById(id);
    const deleted = await this.tournamentRepository.delete(id);
    return !!deleted.affected;
  }
  
}
