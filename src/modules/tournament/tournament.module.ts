// src/modules/tournament/tournament.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { Tournament } from './tournament.entity';
import { TournamentRepository } from './tournament.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentRepository],
})
export class TournamentModule {}
