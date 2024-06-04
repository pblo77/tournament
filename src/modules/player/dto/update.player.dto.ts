// src/modules/player/dto/update-player.dto.ts

import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdatePlayerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  nickname?: string;
}