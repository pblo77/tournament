// src/modules/player/dto/update-player.dto.ts

import { IsOptional, IsNumber } from 'class-validator';

export class UpdateResultDto {
  @IsOptional()
  @IsNumber()
  score?: string;

  @IsOptional()
  @IsNumber()
  matchId?: string;
}