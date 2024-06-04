// src/modules/player/dto/create-player.dto.ts

import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  // Otras propiedades y validaciones según sea necesario
}
