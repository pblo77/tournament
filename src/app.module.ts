import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentModule } from './modules/tournament/tournament.module';
import { PlayerModule } from './modules/player/player.module';
import { ResultModule } from './modules/result/result.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "bymzqbhxm7rs0b6vajfl-postgresql.services.clever-cloud.com",
      port: 5432,
      username: "ugqzxjp7elq0cj6apyki",
      password: "lZCGg20Rh3fLbUFsMLi1WcevrCqoDW",
      database: "bymzqbhxm7rs0b6vajfl",
      entities: [
        "./src/**/*.entity{.ts,.js}"
      ],
      synchronize: true,
    }),
    TournamentModule,
    PlayerModule,
    ResultModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}