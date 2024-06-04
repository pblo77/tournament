// tournament.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create.tournament.dto';
import { UpdateTournamentDto } from './dto/update.tournament.dto';
import { Tournament } from './tournament.entity';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  async getAllTournaments(): Promise<Tournament[]> {
    return this.tournamentService.getAllTournaments();
  }

  @Post()
  async createTournament(@Body() createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    return this.tournamentService.createTournament(createTournamentDto);
  }

  @Put(':id')
  async updateTournament(@Param('id') id: number, @Body() updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
    return this.tournamentService.updateTournament(id, updateTournamentDto);
  }

  @Delete(':id')
  async deleteTournament(@Param('id') id: number): Promise<void> {
    const deleted = await this.tournamentService.deleteTournament(id);
    if (!deleted) throw new NotFoundException(`Tournament with ID ${id} not found`);
  }
}
