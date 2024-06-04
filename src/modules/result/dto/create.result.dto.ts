// src/modules/player/dto/create-player.dto.ts

import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResultDto {
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsNumber()
  matchId: number;

  // Otras propiedades y validaciones según sea necesario
}
