import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;
  
  // Otras propiedades y validaciones según sea necesario
}
