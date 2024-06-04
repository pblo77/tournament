// src/modules/result/result.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { Result } from './result.entity';
import { ResultRepository } from './result.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  controllers: [ResultController],
  providers: [ResultService, ResultRepository],
})
export class ResultModule {}
